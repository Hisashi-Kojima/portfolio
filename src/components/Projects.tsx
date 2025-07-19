'use client'

import WorkCard from './WorkCard'
import PianauraDetails from './ProjectsDetails/PianauraDetails'
import TwelsDetails from './ProjectsDetails/twelsDetails'
import SearchEngineDetails from './ProjectsDetails/SearchEngineDetails'
import DrowsyBatherDetectionDetails from './ProjectsDetails/DrowsyBatherDetectionDetails'
import MicrosoftDetails from './ProjectsDetails/MicrosoftDetails'

const projects = [
  {
    title: 'ピアノーラ',
    description:
      'ピアノの鍵盤部分でイラスト・写真を楽しめる「ピアノーラ」を製作しています。',
    image: '/images/pianaura.JPG',
    details: <PianauraDetails />,
    id: 'project-pianaura'
  },
  {
    title: '数式検索エンジンの事業化',
    description:
      '佐賀大学大学院での研究成果をもとに事業化を目指して起業しました。',
    image: '/images/SearchEngine.png',
    details: <TwelsDetails />,
    id: 'project-twels'
  },
  {
    title: '数式検索エンジンの研究開発',
    description: '修士1年の夏から数式検索エンジンを研究開発しています。',
    image: '/images/SearchEngine.png',
    details: <SearchEngineDetails />,
    id: 'project-search-engine'
  },
  {
    title: '入浴事故検知の研究',
    description: '学士3年後期から修士1年の夏までこの研究をしていました。',
    image: '/images/DrowsyBatherDetection.png',
    details: <DrowsyBatherDetectionDetails />,
    id: 'project-drowsy-detection'
  },
  {
    title:
      'TOMODACHI Microsoft iLEAP Social Innovation and Leadership Program 2017',
    description:
      '3週間のシアトル研修後、半年間それぞれのプロジェクトに取り組みました。',
    image: '/images/Microsoft.JPG',
    details: <MicrosoftDetails />,
    id: 'project-microsoft'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-8 px-4">
      <h2 className="text-3xl font-semibold mb-4">プロジェクト</h2>
      <div className="flex flex-wrap gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="w-full md:w-[calc(50%-1rem)]">
            <WorkCard
              title={project.title}
              description={project.description}
              image={project.image}
              details={project.details}
              id={project.id}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
