import { defineConfig } from 'vite'

export default defineConfig(() => {
  const projectName = 'test_monita_et';
  const outDir = process.env.GITHUB_ACTIONS ? 'dist' : `dist/${projectName}`;

  return {
    base: `/${projectName}/`,
    build: { outDir },
  }
})