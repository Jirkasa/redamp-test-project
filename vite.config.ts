import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/src/icons/*.svg',
      svgrOptions: {
          plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
          svgoConfig: {
              plugins: [
                  {
                      name: 'removeAttrs',
                      params: {
                          attrs: ['*:fill:(none|black)', '*:stroke:(none|black)']
                      }
                  }
              ]
          }
      }
    })
  ],
})
