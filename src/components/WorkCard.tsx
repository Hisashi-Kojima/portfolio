'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface WorkCardProps {
  title: string
  description: string
  image?: string
  details?: React.ReactNode
  id: string
}

export default function WorkCard({
  title,
  description,
  image,
  details,
  id
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
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {image && (
          <div className="flex items-center justify-center w-24 h-24 flex-shrink-0">
            <Image
              src={image}
              alt={title}
              width={96}
              height={96}
              className="object-cover rounded-md"
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {description}
          </p>
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
