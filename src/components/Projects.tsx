import Image from 'next/image'

const projects = [
  {
    title: '数式検索エンジン開発',
    description:
      '佐賀大学大学院での研究成果をもとに事業化を目指して起業しました。',
    image: '/images/SearchEngine.png',
    link: '#'
  },
  {
    title: 'ピアノーラ',
    description: 'ピアノの鍵盤部分でイラスト・写真を楽しめる製品です。',
    image: '/images/pianaura.png',
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-3xl font-semibold mb-10">プロジェクト</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                width={96}
                height={96}
                sizes="96px"
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
