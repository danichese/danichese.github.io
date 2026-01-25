import fs from 'fs'
import path from 'path'

describe('Theme', () => {
  it('has custom tech and human accent colors', () => {
    const cssPath = path.join(process.cwd(), 'src/app/globals.css')
    const cssContent = fs.readFileSync(cssPath, 'utf8')
    expect(cssContent).toContain('--tech-accent')
    expect(cssContent).toContain('--human-accent')
  })
})
