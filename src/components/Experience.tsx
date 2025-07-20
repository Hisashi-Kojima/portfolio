import React from 'react'
import ExternalLink from './ExternalLink'

interface ExperienceItem {
  period: string
  organization: string
  items: (string | React.ReactNode)[]
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      period: '2022年～現在',
      organization: '佐賀大学 数理・情報サイエンスコース（博士後期課程）',
      items: [
        <>
          <ExternalLink href="https://www.twels.co.jp/">
            twelS株式会社
          </ExternalLink>
          を起業
        </>,
        <>
          <a href="#project-twels" className="text-blue-500 underline">
            VCから寄付を受けて事業検証に向けたチーム開発
          </a>
        </>,
        <>
          <a href="#project-twels" className="text-blue-500 underline">
            数式検索に関する特許の国内権利化
          </a>
        </>,
        <>
          <a href="#project-pianaura" className="text-blue-500 underline">
            新規事業「ピアノーラ」
          </a>
        </>,
        <>
          <a href="#project-pianaura" className="text-blue-500 underline">
            「ピアノーラ」に関する意匠権の国内権利化
          </a>
        </>,
        <>
          <ExternalLink href="https://www.tomonextgensummit.org/ja">
            TOMODACHI Next Generation Summit 2025
          </ExternalLink>
          にてスピーチ予定
        </>
      ]
    },
    {
      period: '2020年～2022年',
      organization: '佐賀大学 理工学研究科 知能情報工学コース（修士課程）',
      items: [
        <>
          <a
            href="#project-drowsy-detection"
            className="text-blue-500 underline"
          >
            入浴事故検知の論文執筆、国際会議での発表
          </a>
        </>,
        <>
          <a href="#project-search-engine" className="text-blue-500 underline">
            数式検索エンジンの研究開発
          </a>
        </>,
        <>
          <a href="#project-twels" className="text-blue-500 underline">
            ビジネスプランコンテスト入賞
          </a>
        </>,
        <>
          <a href="#project-twels" className="text-blue-500 underline">
            数式検索に関する特許のPCT出願
          </a>
        </>
      ]
    },
    {
      period: '2016年～2020年',
      organization: '佐賀大学 理工学部 知能情報システム学科（学士課程）',
      items: [
        <>
          <a href="#project-microsoft" className="text-blue-500 underline">
            TOMODACHI Microsoft iLEAP Social Innovation and Leadership Program
            2017
          </a>
          への参加
        </>,
        <>
          約1か月間の有給インターンシップ - 日本マイクロソフト株式会社で
          <ExternalLink href="https://www.empoweredjapan.com/pdf/2018_tokyo.pdf">
            Empowered Woman JAPAN 2018
          </ExternalLink>
          の運営補助
        </>,
        <>
          数日間の有給インターンシップ - 日本マイクロソフト株式会社で
          <ExternalLink href="https://www.empoweredjapan.com/">
            Empowered JAPAN 2019 in SAGA
          </ExternalLink>
          の運営補助
        </>,
        <>
          <a
            href="#project-drowsy-detection"
            className="text-blue-500 underline"
          >
            入浴事故検知の研究
          </a>
        </>
      ]
    }
  ]

  return (
    <section id="experience" className="py-8 px-4">
      <h2 className="text-3xl font-semibold mb-4">これまでの経験</h2>
      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold">
              {exp.period} - {exp.organization}
            </h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
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
