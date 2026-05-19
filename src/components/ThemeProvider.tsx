'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type ThemeMode = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

type ThemeContextValue = {
  mode: ThemeMode
  resolvedTheme: ResolvedTheme
  setMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
const STORAGE_KEY = 'danichese-theme-mode'

const isThemeMode = (mode: string | null): mode is ThemeMode => (
  mode === 'light' || mode === 'dark' || mode === 'system'
)

const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const getStoredMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light'
  const storedMode = window.localStorage.getItem(STORAGE_KEY)
  return isThemeMode(storedMode) ? storedMode : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(getStoredMode)
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const syncSystemTheme = () => setSystemTheme(media.matches ? 'dark' : 'light')
    media.addEventListener('change', syncSystemTheme)

    return () => media.removeEventListener('change', syncSystemTheme)
  }, [])

  const resolvedTheme = mode === 'system' ? systemTheme : mode

  useEffect(() => {
    document.documentElement.dataset.siteTheme = resolvedTheme
    document.documentElement.dataset.themeMode = mode
    document.documentElement.style.colorScheme = resolvedTheme
  }, [mode, resolvedTheme])

  const setMode = useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode)
    window.localStorage.setItem(STORAGE_KEY, nextMode)
  }, [])

  const value = useMemo(
    () => ({ mode, resolvedTheme, setMode }),
    [mode, resolvedTheme, setMode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }
  return context
}
