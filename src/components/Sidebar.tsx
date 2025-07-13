'use client'

export default function Sidebar() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">小嶋　恒（こじま　ひさし）</h1>
        <p className="text-gray-500 dark:text-gray-400">
          ソフトウェアエンジニア
        </p>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        アプリを作ったり、学生起業して新規事業に取り組んだりしています。
      </p>
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
      </nav>
    </div>
  )
}
