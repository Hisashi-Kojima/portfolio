import React from 'react'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const siteUrl = 'https://portfolio-ebon-six-54.vercel.app'

export const metadata = {
  title: '小嶋恒のポートフォリオ',
  description:
    '小嶋恒がこれまで取り組んできたことや制作したアプリ等を紹介しています。',
  openGraph: {
    title: '小嶋恒のポートフォリオ',
    description:
      '小嶋恒がこれまで取り組んできたことや制作したアプリ等を紹介しています。',
    url: siteUrl,
    siteName: 'KOJIMA Hisashi Portfolio',
    images: [
      {
        url: `${siteUrl}/images/HisashiKojima_OGP.png`,
        width: 1200,
        height: 630,
        alt: '小嶋恒の画像'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '小嶋恒のポートフォリオ',
    description:
      '小嶋恒がこれまで取り組んできたことや制作したアプリ等を紹介しています。',
    images: [`${siteUrl}/images/HisashiKojima_OGP.png`]
  }
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
          <main className="flex-1 p-2 lg:p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
