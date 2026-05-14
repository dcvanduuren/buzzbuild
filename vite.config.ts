import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Custom plugin: inline CSS into HTML to eliminate render-blocking request
function inlineCssPlugin(): Plugin {
  return {
    name: 'inline-css',
    enforce: 'post',
    generateBundle(_, bundle) {
      // Find the CSS asset
      let cssContent = ''
      let cssFileName = ''
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (fileName.endsWith('.css') && chunk.type === 'asset') {
          cssContent = chunk.source as string
          cssFileName = fileName
          break
        }
      }

      if (!cssContent || !cssFileName) return

      // Find the HTML asset and replace the CSS link with an inline style tag
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (fileName.endsWith('.html') && chunk.type === 'asset') {
          let html = chunk.source as string
          // Remove the <link rel="stylesheet" ...> for our CSS
          html = html.replace(
            new RegExp(`<link[^>]*href="/${cssFileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`),
            `<style>${cssContent}</style>`
          )
          chunk.source = html
          // Remove the CSS file from the bundle since it's now inlined
          delete bundle[cssFileName]
          break
        }
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), inlineCssPlugin()],
})
