export default function Experience() {
  const experiences = [
    {
      role: 'インターン',
      organization: '日本マイクロソフト株式会社',
      period: '2017年春の約1か月間',
      description: 'Empowered Woman Japanの運営'
    },
    {
      role: 'エンジニア',
      organization: '佐賀大学',
      period: '2020年4月～2021年3月',
      description: 'XXを担当。'
    }
  ]

  return (
    <section id="experience" className="py-16 px-4">
      <h2 className="text-3xl font-semibold mb-10">これまでの経験</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-bold">
              {exp.role} - {exp.organization}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {exp.period}
            </span>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
