'use client'

import ExternalLink from '../ExternalLink'
import VideoEmbed from '../VideoEmbed'

export default function DrowsyBatherDetectionDetails() {
  return (
    <div>
      <p>
        家族が入浴中に寝ていて危険だったことから、入浴中の事故について調べ始め、事故を防ぐために研究を行いました。
        加速度センサーで頭部の動きをトラッキングしたかったので、加速度センサーのデータを取得するAndroidアプリをKotlinで作成しました。
      </p>
      <br />
      <VideoEmbed
        src="https://www.youtube.com/embed/Y79EFQA0YPk?si=9Y4MO-aZFbSvvRfq"
        title="加速度データ取得アプリのデモ動画"
      />
      <br />
      <p>
        取得した加速度データはPythonとグラフ描画ライブラリであるMatplotlibなどを活用して分析し、
        検知アルゴリズムを考案しました。
      </p>
      <br />
      <p>様々なグラフ</p>
      <VideoEmbed
        src="https://www.youtube.com/embed/SAsWH9XU7Xw?si=F7P-Lspa_KhK75bT"
        title="加速度データの様々なグラフの動画"
      />
      <br />
      <p>時間変化のグラフ</p>
      <VideoEmbed
        src="https://www.youtube.com/embed/BXru-nQj9KY?si=VvVgpV1zZQGLJs8h"
        title="加速度データの時間変化のグラフ"
      />
      <br />
      <br />
      <p>英語で論文を書きました。</p>
      <ExternalLink href="https://link.springer.com/chapter/10.1007/978-3-030-50017-7_34">
        Drowsy Bather Detection Using a Triaxial Accelerometer
      </ExternalLink>
      <br />
      <br />
      <p>国際会議でも発表しました。</p>
      <ExternalLink href="https://2020.hci.international/tuesday">
        Human-Computer Interaction International (HCII) 2020
      </ExternalLink>
    </div>
  )
}
