#!/usr/bin/env bash
#
# 手动兜底发布：本地静态生成后，把产物推到一个独立分支。
# 默认推到 GitHub 的 gh-pages 分支（GitHub Pages 选「Deploy from a branch」即可）。
#
#   npm run deploy:branch
#
# 换托管平台只要改环境变量，例如推回 Gitee：
#   GIT_REMOTE=git@gitee.com:rookie_c/personal-web.git \
#   GIT_BRANCH=pages GIT_BASE=/personal-web/ \
#   GIT_SITE_URL=https://rookie_c.gitee.io/personal-web/ \
#   npm run deploy:branch
#
set -euo pipefail

REMOTE_URL="${GIT_REMOTE:-git@github.com:CMrookie/personal-web.git}"
BRANCH="${GIT_BRANCH:-gh-pages}"
BASE="${GIT_BASE:-/personal-web/}"
SITE_URL="${GIT_SITE_URL:-}"

cd "$(dirname "$0")/.."

if [ ! -d node_modules ]; then
  echo "✗ 先装依赖：npm install"
  exit 1
fi

echo "▸ 目标仓库   ${REMOTE_URL}"
echo "▸ 发布分支   ${BRANCH}"
echo "▸ baseURL    ${BASE}"
[ -n "${SITE_URL}" ] && echo "▸ 站点地址   ${SITE_URL}"

echo
echo "▸ [1/4] 静态生成"
NUXT_APP_BASE_URL="$BASE" NUXT_PUBLIC_SITE_URL="$SITE_URL" npm run generate

if [ ! -f .output/public/index.html ]; then
  echo "✗ 没找到 .output/public/index.html，构建失败"
  exit 1
fi

echo
echo "▸ [2/4] 检出发布分支到临时目录"
TMP_DIR="$(mktemp -d)"
cleanup() { rm -rf "$TMP_DIR"; }
trap cleanup EXIT

git -C "$TMP_DIR" init -q
git -C "$TMP_DIR" remote add origin "$REMOTE_URL"

if git -C "$TMP_DIR" fetch -q --depth 1 origin "$BRANCH" 2>/dev/null; then
  git -C "$TMP_DIR" checkout -q -B "$BRANCH" FETCH_HEAD
  echo "  已有 ${BRANCH} 分支，在其基础上更新"
else
  git -C "$TMP_DIR" checkout -q --orphan "$BRANCH"
  echo "  远程还没有 ${BRANCH} 分支，新建"
fi

find "$TMP_DIR" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +

echo
echo "▸ [3/4] 拷贝产物"
if command -v rsync >/dev/null 2>&1; then
  rsync -a .output/public/ "$TMP_DIR"/
else
  cp -R .output/public/. "$TMP_DIR"/
fi
touch "$TMP_DIR/.nojekyll"

git -C "$TMP_DIR" add -A
if git -C "$TMP_DIR" diff --cached --quiet; then
  echo "  产物没有变化，跳过提交"
else
  git -C "$TMP_DIR" -c user.name="$(git config user.name || echo deploy)" \
    -c user.email="$(git config user.email || echo deploy@localhost)" \
    commit -q -m "chore: 发布静态站点 $(date '+%Y-%m-%d %H:%M')"
fi

echo
echo "▸ [4/4] 推送"
if ! git -C "$TMP_DIR" push -q origin "HEAD:refs/heads/${BRANCH}"; then
  echo "✗ 推送失败。常见原因："
  echo "  · 仓库不存在或没有写权限"
  echo "  · SSH 公钥没加到托管平台（也可改用 https + 令牌：GIT_REMOTE=https://<用户>:<令牌>@host/<owner>/<repo>.git）"
  exit 1
fi

cat <<EOF

✓ 推送完成：${BRANCH} 分支

接下来（只需做一次）：
  GitHub：仓库 Settings → Pages → Source 选「Deploy from a branch」
          → 分支选 ${BRANCH}、目录选 / (root) → Save

之后每次发布，重新跑一次 npm run deploy:branch 即可，GitHub Pages 会自动重建。
EOF
