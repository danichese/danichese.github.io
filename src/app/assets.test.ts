import fs from 'fs'
import path from 'path'

describe('Assets', () => {
  it('has the profile picture', () => {
    const filePath = path.join(process.cwd(), 'public/assets/profile-pic.png')
    expect(fs.existsSync(filePath)).toBe(true)
  })

  it('has the CV PDF', () => {
    const filePath = path.join(process.cwd(), 'public/assets/Dan-Cheeseman-CV-INC-2024.pdf')
    expect(fs.existsSync(filePath)).toBe(true)
  })
})
