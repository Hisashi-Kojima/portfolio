export default function Experience() {
  const experiences = [
    {
      period: '2022年～現在',
      organization: '佐賀大学 博士後期課程',
      items: ['twelS株式会社を起業', 'ピアノーラ']
    },
    {
      period: '2020年～2022年',
      organization: '佐賀大学 修士課程',
      items: ['数式検索エンジン開発', 'ビジネスプランコンテスト入賞']
    },
    {
      period: '2016年～2020年',
      organization: '佐賀大学 学士課程',
      items: [
        'TOMODACHI Microsoft iLEAP Social Innovation and Leadership Program 2017',
        'インターンシップ 日本マイクロソフト株式会社でEmpowered Woman Japanの運営補助',
        'インターンシップ 日本マイクロソフト株式会社でEmpowered Japanの運営補助'
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 px-4">
      <h2 className="text-3xl font-semibold mb-10">これまでの経験</h2>
      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold">
              {exp.period} - {exp.organization}
            </h3>
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
              {exp.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
