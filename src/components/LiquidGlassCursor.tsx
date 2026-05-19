'use client'

import { useEffect, useState } from 'react'

type TrailPoint = {
  id: number
  x: number
  y: number
  createdAt: number
}

const MAX_POINTS = 18
const POINT_LIFETIME_MS = 920

const LiquidGlassCursor = () => {
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [points, setPoints] = useState<TrailPoint[]>([])

  useEffect(() => {
    setMounted(true)
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

    let id = 0
    let frame = 0

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return

      const next = { x: event.clientX, y: event.clientY }
      setPosition(next)

      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const now = Date.now()
        setPoints((current) => [
          { id: id++, x: next.x, y: next.y, createdAt: now },
          ...current.filter((point) => now - point.createdAt < POINT_LIFETIME_MS),
        ].slice(0, MAX_POINTS))
      })
    }

    const decay = window.setInterval(() => {
      const now = Date.now()
      setPoints((current) => current.filter((point) => now - point.createdAt < POINT_LIFETIME_MS))
    }, 80)

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.clearInterval(decay)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="liquid-cursor" aria-hidden="true">
      {points.map((point, index) => {
        const age = Date.now() - point.createdAt
        const life = Math.max(0, 1 - age / POINT_LIFETIME_MS)
        const scale = 0.45 + life * 0.75

        return (
          <span
            key={point.id}
            className="liquid-cursor__trail"
            style={{
              opacity: life * 0.58,
              transform: `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) scale(${scale - index * 0.012})`,
            }}
          />
        )
      })}
      <span
        className="liquid-cursor__lens"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  )
}

export default LiquidGlassCursor
