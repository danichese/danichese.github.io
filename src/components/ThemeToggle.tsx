'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme, type ThemeMode } from './ThemeProvider'

const modes: Array<{
  mode: ThemeMode
  label: string
  icon: typeof Sun
}> = [
  { mode: 'light', label: 'Light', icon: Sun },
  { mode: 'dark', label: 'Dark', icon: Moon },
  { mode: 'system', label: 'System', icon: Monitor },
]

const ThemeToggle = () => {
  const { mode, setMode } = useTheme()

  return (
    <div
      className="theme-toggle"
      role="radiogroup"
      aria-label="Colour mode"
      title="Chaos Emeralds colour mode"
    >
      {modes.map(({ mode: option, label, icon: Icon }) => {
        const active = mode === option

        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={`${label} colour mode`}
            className="theme-toggle__button"
            data-active={active ? 'true' : 'false'}
            onClick={() => setMode(option)}
            title={label}
          >
            <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
            <span>{label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default ThemeToggle
