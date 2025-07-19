'use client'

import ExternalLink from '../ExternalLink'

export default function PianauraDetails() {
  return (
    <>
      <p>
        ピアノーラはカバーなので、既存のピアノに被せて、そのまま演奏できます。
        <br />
        ピアノーラを電子ピアノに被せて演奏した動画です。
        この演奏は研究室の後輩で一緒に活動している中川の演奏です。
      </p>
      <iframe
        width="315"
        height="560"
        src="https://www.youtube.com/embed/80K3_SSpqQ0"
        title="みんな空の下 / 絢香【ピアノーラ】#shorts #弾いてみた #ピアノ #piano"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p>
        ピアノーラの詳細：
        <ExternalLink href="https://www.twels.co.jp/">
          twelS株式会社
        </ExternalLink>
      </p>
      <p>
        目標は達成できませんでしたが、クラウドファンディングにも挑戦しました。
        <br />
        プロジェクトへの思いなどを記載しています。
        <br />
        <ExternalLink href="https://camp-fire.jp/projects/816321/view">
          ピアノの鍵盤部分をキャンバスに！イラストや写真で自分だけのピアノに変身！
        </ExternalLink>
      </p>
      <p>
        ピアノーラに関して、意匠権を日本で権利化しました。
        <br />
        <ExternalLink href="https://www.j-platpat.inpit.go.jp/c1801/DE/JP-2024-027404/30/ja">
          登録第1801102号
        </ExternalLink>
      </p>
    </>
  )
}
