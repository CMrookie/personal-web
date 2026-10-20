#!/usr/bin/env node
/**
 * 本地预览「静态产物」的脚本。
 * 用法：PREVIEW_BASE=/personal-web/ npm run preview:dist
 * 会按 Gitee Pages 的子路径方式挂载 .output/public，
 * 用来验证 baseURL 配错没有（这是最容易上线才发现的问题）。
 */
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, resolve } from 'node:path'

const root = resolve('.output/public')
const base = (process.env.PREVIEW_BASE || '/personal-web/').replace(/\/?$/, '/')
const port = Number(process.env.PORT || 4173)

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', 'http://localhost')
  let pathname = decodeURIComponent(url.pathname)

  if (pathname === base.replace(/\/$/, '')) {
    res.writeHead(301, { location: base })
    return res.end()
  }
  if (!pathname.startsWith(base)) {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
    return res.end(`404 — 只挂载在 ${base} 下（这就是 baseURL 的作用）`)
  }

  let rel = pathname.slice(base.length)
  if (rel === '' || rel.endsWith('/')) rel += 'index.html'

  const file = join(root, rel)
  try {
    const body = await readFile(file)
    res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' })
    return res.end(body)
  } catch {
    // 和 GitHub Pages 一致：找不到就给 404.html，状态码 404
    try {
      const body = await readFile(join(root, '404.html'))
      res.writeHead(404, { 'content-type': types['.html'] })
      return res.end(body)
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
      return res.end('404 — 还没有构建产物，先跑 npm run generate')
    }
  }
})

server.listen(port, () => {
  console.log(`\n  预览： http://localhost:${port}${base}\n  产物： ${root}\n`)
})
