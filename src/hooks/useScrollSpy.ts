'use client'

import { useEffect, useState } from 'react'

/**
 * 画面に最も大きく表示されているセクションを検出するカスタムフック。
 * @param ids - 対象となるセクションのID配列
 * @param offset - ビューポート上端から有効範囲として除外したいオフセット（px）
 * @returns 現在アクティブなセクションのID
 */
export function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio) // 大きい順にソート

        if (visibleEntries.length > 0) {
          const topMost = visibleEntries[0]
          if (topMost.target.id) {
            setActiveId(topMost.target.id)
          }
        }
      },
      {
        rootMargin: `-${offset}px 0px 0px 0px`,
        threshold: [0.25, 0.5, 0.75] // 交差しているかを細かく監視するために複数指定している
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
