module.exports = (port) => {
  const Koa = require('koa')
  const consola = require('consola')
  const PORT = port

  const app = new Koa()

  const runningInfo = `the server is running http://localhost:${PORT}`

  app.use((ctx, next) => {
    ctx.body = runningInfo
  })

  app.listen(PORT, () => consola.success(runningInfo))
}