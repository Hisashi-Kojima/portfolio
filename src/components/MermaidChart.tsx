'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidChartProps {
  chart: string
}

export default function MermaidChart({ chart }: MermaidChartProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
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
