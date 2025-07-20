'use client'

import ExternalLink from '../ExternalLink'
import VideoEmbed from '../VideoEmbed'

export default function RoRopDetails() {
  return (
    <>
      <p>
        アナログゲームの
        <ExternalLink href="https://fulelu-edutainment.games/teaser/rorop/">
          RoRop
        </ExternalLink>
        を製作者の許可のもと、Webアプリで作ってみました。
      </p>
      <VideoEmbed
        src="https://www.youtube.com/embed/JvvYMLsVDPo"
        title="RoRopのWebアプリのデモ動画"
        ratio="aspect-9/16"
      />
      <p>
        コンピュータ対戦など、もっと作り込めますが、
        今回はReactやNext.jsの勉強が目的であまり時間を割けなかったので、開発はこれでやめています。
      </p>
      <p>
        ルール通りの挙動になっているかを確認するためにJestでテストも作成しています。
      </p>
    </>
  )
}
