'use client'

interface VideoEmbedProps {
  src: string
  title?: string
  orientation?: 'horizontal' | 'vertical'
}

/**
 * YouTubeなどの埋め込み動画を埋め込むためのコンポーネント。
 * @param src - 埋め込み動画用のURL
 * @param title - 動画のタイトル
 * @param orientation - 動画の向き。省略時は horizontal 扱い。
 * @returns 埋め込み動画
 */
export default function VideoEmbed({
  src,
  title = '埋め込み動画',
  orientation = 'horizontal'
}: VideoEmbedProps) {
  const isVertical = orientation === 'vertical'

  return (
    <div
      className={
        isVertical
          ? 'mx-auto max-h-[80vh] aspect-[9/16]'
          : 'w-full aspect-video'
      }
    >
      <iframe
        src={src}
        title={title}
        className="w-full h-full rounded-sm"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}
