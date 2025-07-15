'use client'

import Image from 'next/image'

interface WorkCardProps {
  title: string
  description: string
  image?: string
}

export default function WorkCard({ title, description, image }: WorkCardProps) {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4">
      {image && (
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="96px"
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
  )
}
