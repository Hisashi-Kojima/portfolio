'use client'

interface VideoEmbedProps {
  src: string
  ratio?: string // 例）'aspect-video' や 'aspect-[9/16]'
  title?: string
}

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
        className="absolute top-0 left-0 w-full h-full rounded"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}
