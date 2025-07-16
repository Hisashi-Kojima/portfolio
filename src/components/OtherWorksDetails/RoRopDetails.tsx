'use client'

import ExternalLink from '../ExternalLink'

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
      <iframe
        width="315"
        height="560"
        src="https://www.youtube.com/embed/JvvYMLsVDPo"
        title="RoRop_Webアプリ_デモ動画"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p>
        コンピュータ対戦など、もっと作り込めますが、
        今回はReactやNext.jsの勉強が目的であまり時間を割けなかったので、開発はこれでやめています。
        <br />
        <br />
        ルール通りの挙動になっているか確認するためにテストも作成しています。
      </p>
    </>
  )
}
