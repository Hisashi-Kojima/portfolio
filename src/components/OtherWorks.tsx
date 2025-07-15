'use client'

import WorkCard from './WorkCard'
import VideoEditingDetails from './OtherWorksDetails/VideoEditingDetails'
import MathMapDetails from './OtherWorksDetails/MathMapDetails'
import RoRopDetails from './OtherWorksDetails/RoRopDetails'

const otherWorks = [
  {
    title: '動画編集',
    description: 'DaVinci Resolveを使って動画編集をしました。',
    image: '/images/pianaura.png',
    details: <VideoEditingDetails />
  },
  {
    title: 'mathMap',
    description: 'グラフを活用。',
    image: '/images/pianaura.png',
    details: <MathMapDetails />
  },
  {
    title: 'アナログゲーム',
    description: 'アナログゲームをWebで作ってみました。',
    image: '/images/pianaura.png',
    details: <RoRopDetails />
  }
]

export default function OtherWorks() {
  return (
    <section id="other-works" className="py-4 px-4">
      <h2 className="text-3xl font-semibold mb-10">その他の制作物</h2>
      <div className="flex flex-wrap gap-8">
        {otherWorks.map((work, idx) => (
          <div key={idx} className="w-full md:w-[calc(50%-1rem)]">
            <WorkCard
              title={work.title}
              description={work.description}
              image={work.image}
              details={work.details}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
