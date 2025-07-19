'use client'

import Image from 'next/image'
import SidebarIntro from './SidebarIntro'

export default function Sidebar() {
  return (
    <div className="space-y-6">
      <SidebarIntro />
      <nav className="space-y-2">
        <a
          href="#about"
          className="block text-gray-600 hover:text-black dark:hover:text-white"
        >
          自己紹介
        </a>
        <a
          href="#experience"
          className="block text-gray-600 hover:text-black dark:hover:text-white"
        >
          これまでの経験
        </a>
        <a
          href="#projects"
          className="block text-gray-600 hover:text-black dark:hover:text-white"
        >
          プロジェクト
        </a>
        <a
          href="#other-works"
          className="block text-gray-600 hover:text-black dark:hover:text-white"
        >
          その他の制作物
        </a>
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
