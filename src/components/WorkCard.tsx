'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface WorkCardProps {
  title: string
  description: string
  image?: string
  details?: React.ReactNode
  id: string
  tags?: string[]
}

// タグのカテゴリ
const programmingTags = [
  'Python',
  'Kotlin',
  'Node.js',
  'Next.js',
  'React',
  'Tailwind CSS',
  'Docker',
  'Django',
  'Scrapy',
  'MySQL',
  'G6'
]

const techTags = [
  'Bluetooth',
  '加速度センサ',
  '字句/構文解析',
  'モバイルアプリ',
  'DaVinci Resolve'
]

function getTagColor(tag: string): string {
  if (programmingTags.includes(tag)) {
    return 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900'
  }
  if (techTags.includes(tag)) {
    return 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900'
  }
  return 'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900'
}

export default function WorkCard({
  title,
  description,
  image,
  details,
  id,
  tags
}: WorkCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  // ページ内リンクでWorkCardにジャンプした際に
  // 自動的にOpenするための設定
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleHashChange = () => {
      if (window.location.hash === `#${id}`) {
        setIsOpen(true)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [id])

  return (
    <div
      id={id}
      className={clsx(
        'bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4 transition-all',
        isOpen && 'border border-blue-500'
      )}
    >
      <div
        className="flex items-center gap-4 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg -m-2 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {image && (
          <div className="relative w-24 aspect-square flex-shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-md"
              sizes="192px"
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={clsx(
                    'px-2 py-1 text-xs font-medium rounded',
                    getTagColor(tag)
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* クリックできる要素であることを伝えるために追加 */}
        <div className="ml-auto">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      <div
        className={clsx(
          'grid transition-all duration-300 ease-in-out',
          isOpen
            ? 'mt-4 grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden text-sm text-gray-700 dark:text-gray-300 space-y-4">
          {details}
        </div>
      </div>
    </div>
  )
}
