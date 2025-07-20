'use client'

import WorkCard from './WorkCard'
import VideoEditingDetails from './OtherWorksDetails/VideoEditingDetails'
import MathMapDetails from './OtherWorksDetails/MathMapDetails'
import RoRopDetails from './OtherWorksDetails/RoRopDetails'
import PortfolioDetails from './OtherWorksDetails/PortfolioDetails'

const otherWorks = [
  {
    title: 'ポートフォリオ',
    description:
      'このサイトです。Next.js + Tailwind CSS + Dockerで作成しました。開発期間：約1週間',
    image: '/images/HisashiKojima_square.JPG',
    details: <PortfolioDetails />,
    id: 'work-portfolio',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Docker']
  },
  {
    title: '動画編集',
    description: 'DaVinci Resolveを使って動画編集をしました。',
    image: '/images/pianaura_thumbnail.png',
    details: <VideoEditingDetails />,
    id: 'work-video-edit',
    tags: ['DaVinci Resolve']
  },
  {
    title: 'mathMap',
    description:
      'グラフを活用して数学やそこから発展した技術の関係性を可視化しました。開発期間：約1週間',
    image: '/images/mathMap.png',
    details: <MathMapDetails />,
    id: 'work-mathmap',
    tags: ['Docker', 'Node.js', 'G6']
  },
  {
    title: 'RoRop',
    description:
      'アナログゲームのRoRopをWebアプリで作ってみました。開発期間：約1か月間',
    image: '/images/rorop.png',
    details: <RoRopDetails />,
    id: 'work-rorop',
    tags: ['Next.js', 'Tailwind CSS', 'Jest']
  }
]

export default function OtherWorks() {
  return (
    <section id="other-works" className="py-8 px-4">
      <h2 className="text-3xl font-semibold mb-4">その他の制作物</h2>
      <div className="flex flex-wrap gap-8">
        {otherWorks.map((work, idx) => (
          <div key={idx} className="w-full md:w-[calc(50%-1rem)]">
            <WorkCard
              title={work.title}
              description={work.description}
              image={work.image}
              details={work.details}
              id={work.id}
              tags={work.tags}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
