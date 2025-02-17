import { defineConfig } from 'vitest/config'
import { dirname, resolve } from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['test/**/*.e2e-spec.ts'],
    setupFiles: ['test/setup.ts'],
    testTimeout: 30000,
  },
  resolve: {
    alias: {
      '@features': resolve(__dirname, './src/features'),
      '@shared': resolve(__dirname, './src/shared'),
      '@config': resolve(__dirname, './src/config')
    }
  }
})
