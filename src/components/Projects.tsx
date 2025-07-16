'use client'

import WorkCard from './WorkCard'
import PianauraDetails from './ProjectsDetails/PianauraDetails'
import SearchEngineDetails from './ProjectsDetails/SearchEngineDetails'
import DrowsyBatherDetectionDetails from './ProjectsDetails/DrowsyBatherDetectionDetails'

const projects = [
  {
    title: 'ピアノーラ',
    description: 'ピアノの鍵盤部分でイラスト・写真を楽しめる製品です。',
    image: '/images/pianaura.JPG',
    details: <PianauraDetails />
  },
  {
    title: '数式検索',
    description:
      '佐賀大学大学院での研究成果をもとに事業化を目指して起業しました。',
    image: '/images/SearchEngine.png',
    details: <SearchEngineDetails />
  },
  {
    title: '入浴事故検知の研究',
    description: '学士3年後期から修士1年の夏までこの研究をしていました。',
    image: '/images/DrowsyBatherDetection.png',
    details: <DrowsyBatherDetectionDetails />
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-4 px-4">
      <h2 className="text-3xl font-semibold mb-10">プロジェクト</h2>
      <div className="flex flex-wrap gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="w-full md:w-[calc(50%-1rem)]">
            <WorkCard
              title={project.title}
              description={project.description}
              image={project.image}
              details={project.details}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
