'use client'

import { useEffect, useState } from 'react'

// 画面に最も大きく表示されているセクションを検出するカスタムフック
export function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          const topMost = visibleEntries[0]
          if (topMost.target.id) {
            setActiveId(topMost.target.id)
          }
        }
      },
      {
        rootMargin: `-${offset}px 0px -50px 0px`,
        threshold: [0.25, 0.5, 0.75]
      }
    )

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as Element[]
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ids, offset])

  return activeId
}
