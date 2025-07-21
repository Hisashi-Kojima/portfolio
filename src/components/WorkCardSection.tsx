'use client'

import WorkCard from './WorkCard'

interface WorkCardSectionProps {
  id: string
  title: string
  items: {
    title: string
    description: string
    image?: string
    details?: React.ReactNode
    id: string
    tags?: string[]
  }[]
}

/**
 * WorkCardを表示するセクションのコンポーネント。
 * @param id - セクションのID。Experience.tsxのページ内リンクに対応している。
 * @param title - セクションのタイトル
 * @param items - WorkCardの内容
 * @returns WorkCardを含んだセクション
 */
export default function WorkCardSection({
  id,
  title,
  items
}: WorkCardSectionProps) {
  return (
    <section id={id} className="py-8 px-4">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-8">
        {items.map((item, idx) => (
          <div key={idx}>
            <WorkCard
              title={item.title}
              description={item.description}
              image={item.image}
              details={item.details}
              id={item.id}
              tags={item.tags}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
