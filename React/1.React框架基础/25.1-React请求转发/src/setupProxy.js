/*
 * @Date: 2024-04-13 21:02:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-13 21:07:16
 * @FilePath: \25.1-React请求转发\src\setupProxy.js
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3005',
      changeOrigin: true,
    }),
  )
  // 可多个服务器地址转发
  // ,
  // app.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'http://localhost:3005',
  //     changeOrigin: true,
  //   }),
  // )
}