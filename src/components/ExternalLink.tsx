'use client'

import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import React, { ComponentProps } from 'react'
import clsx from 'clsx'

type ExternalLinkProps = ComponentProps<'a'> & {
  children: React.ReactNode
}

export default function ExternalLink({
  children,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={clsx(
        'inline-flex items-center gap-1 text-blue-500 underline hover:text-blue-700',
        className
      )}
      target="_blank"
      {...props}
    >
      {children}
      <ExternalLinkIcon className="w-4 h-4 inline" />
    </a>
  )
}
