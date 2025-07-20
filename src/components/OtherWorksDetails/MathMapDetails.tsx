'use client'

import ExternalLink from '../ExternalLink'
import VideoEmbed from '../VideoEmbed'

export default function MathMapDetails() {
  return (
    <>
      <p>
        数学を身近に感じることができるように、それぞれの関係性をグラフで可視化しました。
      </p>
      <VideoEmbed
        src="https://www.youtube.com/embed/YbpVGDPb-fw?si=zwoNEay03AMtG6O9"
        title="mathMapのデモ動画"
      />
      <p>
        グラフにはOSSの
        <ExternalLink href="https://g6.antv.antgroup.com/en">G6</ExternalLink>
        を使用しました。
      </p>
      <p>
        以下でmathMapのソースコードを公開しています。
        仮説検証のためにぱっと作ったもので、売上に繋がらなさそうだったので開発をやめています。
        将来の自分に伝わる程度しかREADMEなども書いていないことをご了承ください。
      </p>
      <ExternalLink href="https://github.com/Hisashi-Kojima/mathMap">
        mathMap
      </ExternalLink>
    </>
  )
}
