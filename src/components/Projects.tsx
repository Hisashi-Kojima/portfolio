'use client'

import WorkCard from './WorkCard'

const projects = [
  {
    title: 'ピアノーラ',
    description: 'ピアノの鍵盤部分でイラスト・写真を楽しめる製品です。',
    image: '/images/pianaura.png'
  },
  {
    title: '数式検索',
    description:
      '佐賀大学大学院での研究成果をもとに事業化を目指して起業しました。',
    image: '/images/SearchEngine.png'
  },
  {
    title: '入浴事故検知',
    description: '',
    image: '/images/SearchEngine.png'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-4 px-4">
      <h2 className="text-3xl font-semibold mb-10">プロジェクト</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <WorkCard
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}
