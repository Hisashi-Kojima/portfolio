import React from 'react'
import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'ポートフォリオ',
  description: '私のポートフォリオサイト'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white">
        <div className="flex min-h-screen">
          <aside className="hidden lg:block w-1/4 border-r border-zinc-700 p-6 sticky top-0 h-screen">
            <Sidebar />
          </aside>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
