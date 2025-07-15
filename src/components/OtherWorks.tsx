'use client'

import WorkCard from './WorkCard'

const otherWorks = [
  {
    title: '動画編集',
    description: 'DaVinci Resolveを使って動画編集をしました。',
    image: '/images/pianaura.png'
  },
  {
    title: 'mathMap',
    description: 'グラフを活用。',
    image: '/images/pianaura.png'
  },
  {
    title: 'アナログゲーム',
    description: 'アナログゲームをWebで作ってみました。',
    image: '/images/pianaura.png'
  }
]

export default function OtherWorks() {
  return (
    <section id="other-works" className="py-4 px-4">
      <h2 className="text-3xl font-semibold mb-10">その他の制作物</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherWorks.map((work, idx) => (
          <WorkCard
            key={idx}
            title={work.title}
            description={work.description}
            image={work.image}
          />
        ))}
      </div>
    </section>
  )
}
