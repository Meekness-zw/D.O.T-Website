import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-public-subpages',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = (req.url ?? '/').split('?')[0].split('#')[0]
          const candidate = path.join(__dirname, 'public', url, 'index.html')
          if (url !== '/' && fs.existsSync(candidate)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            fs.createReadStream(candidate).pipe(res)
            return
          }
          next()
        })
      },
    },
  ],
})
