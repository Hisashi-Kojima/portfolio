'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidChartProps {
  chart: string
}

/**
 * Mermaid.js を使用して、Mermaid 記法で定義された図を描画するためのコンポーネント。
 * @param chart - Mermaid 記法で記述されたチャート定義文字列
 * @returns Mermaid.js により描画された図
 */
export default function MermaidChart({ chart }: MermaidChartProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    mermaid.initialize({
      startOnLoad: false,
      theme: prefersDark ? 'dark' : 'default',
      themeVariables: {
        fontSize: '12px'
      }
    })

    const renderMermaid = async () => {
      try {
        // 同一ページに複数の図を表示する場合には
        // ピリオドなしの一意なIDを生成
        const id = `mermaid-${Date.now()}`

        const { svg } = await mermaid.render(id, chart)
        if (ref.current) {
          ref.current.innerHTML = svg
        }
      } catch (error) {
        console.error('Mermaid render error:', error)
      }
    }

    renderMermaid()
  }, [chart])

  return (
    <div className="flex justify-center">
      <div ref={ref} />
    </div>
  )
}
