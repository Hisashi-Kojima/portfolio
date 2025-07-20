'use client'

interface ListDiscProps {
  listItems: string[]
}

/**
 * 文章中で箇条書きするときの使用を想定したリスト
 * @param listItems - liタグの中身
 * @returns liタグを含むulタグ
 */
export default function ListDisc({ listItems }: ListDiscProps) {
  return (
    <ul className="list-disc list-inside">
      {listItems.map((li, idx) => (
        <li key={idx}>{li}</li>
      ))}
    </ul>
  )
}
