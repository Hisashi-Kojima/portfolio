'use client'

interface VideoEmbedProps {
  src: string
  ratio?: string // 例）'aspect-video' や 'aspect-9/16'
  title?: string
}

/**
 * YouTubeなどの埋め込み動画を埋め込むためのコンポーネント。
 * @param src - 埋め込み動画用のURL
 * @param ratio - 埋め込み動画の縦横比。縦にしたいなら'aspect-9/16'などを渡す。
 * @param title - 動画のタイトル
 * @returns 埋め込み動画
 */
export default function VideoEmbed({
  src,
  ratio = 'aspect-video',
  title = '埋め込み動画'
}: VideoEmbedProps) {
  return (
    <div className={`relative w-full ${ratio}`}>
      <iframe
        src={src}
        title={title}
        className="absolute top-0 left-0 w-full h-full rounded-sm"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}
