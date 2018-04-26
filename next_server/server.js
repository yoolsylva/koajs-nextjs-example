const next = require('next')
const { parse } = require('url');

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = app.getRequestHandler()
const port = process.env.PORT || 9070;

// With express.js
const express = require('express')

express().use((req, res, next)=> {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.prepare().then(() => {
  const server = express()
  server.get('*', (req, res) => {
    return handler(req, res);
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Next.JS ready on http://localhost:${port}`);
  });
})
