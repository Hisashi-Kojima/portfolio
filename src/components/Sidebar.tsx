'use client'

import Image from 'next/image'
import clsx from 'clsx'

import SidebarIntro from './SidebarIntro'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const sections = [
  { id: 'about', label: '自己紹介' },
  { id: 'experience', label: 'これまでの経験' },
  { id: 'projects', label: 'プロジェクト' },
  { id: 'other-works', label: 'その他の制作物' }
]

export default function Sidebar() {
  const activeId = useScrollSpy(
    sections.map((s) => s.id),
    0
  )

  return (
    <div className="space-y-6">
      <SidebarIntro />
      <nav className="space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={clsx(
              'block text-gray-600 hover:text-black dark:hover:text-white transition-colors',
              activeId === section.id && 'font-bold text-black dark:text-white'
            )}
          >
            {section.label}
          </a>
        ))}
      </nav>

      {/* 下部にプロフィール画像を表示 */}
      <div className="relative h-60 w-full">
        <Image
          src="/images/HisashiKojima.JPG"
          alt="小嶋恒の写真"
          fill
          sizes="25vw"
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  )
}
