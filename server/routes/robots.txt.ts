export default defineEventHandler((event) => {
  const { indexable } = useRuntimeConfig(event).public
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return indexable
    ? 'User-agent: *\nAllow: /\n'
    : 'User-agent: *\nDisallow: /\n'
})
