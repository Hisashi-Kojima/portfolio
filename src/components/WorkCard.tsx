'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface WorkCardProps {
  title: string
  description: string
  image?: string
  details?: React.ReactNode
}

export default function WorkCard({
  title,
  description,
  image,
  details
}: WorkCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4 transition-all duration-300">
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
