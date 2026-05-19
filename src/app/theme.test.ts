import fs from 'fs'
import path from 'path'

describe('Theme', () => {
  it('has Chaos Emeralds RGB light and dark theme tokens', () => {
    const cssPath = path.join(process.cwd(), 'src/app/globals.css')
    const cssContent = fs.readFileSync(cssPath, 'utf8')
    expect(cssContent).toContain('--chaos-red')
    expect(cssContent).toContain('--chaos-green')
    expect(cssContent).toContain('--chaos-blue')
    expect(cssContent).toContain('html[data-site-theme="dark"]')
    expect(cssContent).toContain('--tech-accent')
    expect(cssContent).toContain('--human-accent')
  })
})
