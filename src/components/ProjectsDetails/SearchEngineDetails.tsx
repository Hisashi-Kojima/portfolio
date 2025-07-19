'use client'

import ExternalLink from '../ExternalLink'

export default function SearchEngineDetails() {
  return (
    <>
      <h4 className="font-semibold">【数式検索について】</h4>
      <p>
        自然言語（日本語や英語など）は「会社」と「社会」のように、文字が入れ替わると意味が変わってしまいます。
        一方、数式の場合「a=b」と「b=a」は同じ意味です。
        このように自然言語と数式は特徴が異なるので、
        自然言語用の検索エンジンをそのまま数式に適用させても
        数式の特徴を捉えられません。
      </p>
      <p>
        数式の構造を理解して数式の検索精度を高める数式検索エンジンを修士1年の夏から研究開発しました。
      </p>
      <h4 className="font-semibold">【ビジネスプランコンテスト】</h4>
      <p>
        九州旅客鉄道株式会社、西部ガスホールディングス株式会社といった
        九州の大手企業の事業部長クラスが審査員を務める
      </p>
      <ExternalLink href="https://qshu-nbc.or.jp/2021/12/24/%E3%80%90-%E7%AC%AC21%E5%9B%9E%E4%B9%9D%E5%B7%9E%EF%BD%A5%E5%A4%A7%E5%AD%A6%E7%99%BA%E3%83%99%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC%EF%BD%A5%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%97%E3%83%A9/">
        第21回九州･大学発ベンチャー･ビジネスプランコンテスト
      </ExternalLink>
      <p>
        において、22校54プランの中から九州経済産業局長賞（準グランプリに相当）と副賞10万円を受賞しました。
      </p>
      <h4 className="font-semibold">【チーム開発】</h4>
      <p>
        ビジコンでお会いした福岡市内のVCから研究室の私宛に事業検証のために234万円を寄付していただきました。
        そのお金をもとに以下のメンバー
      </p>
      <ul className="list-disc list-inside">
        <li>私</li>
        <li>
          芸術の准教授（元サイバーエージェントのデザイナー・フロントエンジニア）
        </li>
        <li>情報の学生5人（私が所属する研究室の後輩）</li>
        <li>芸術の学生10人（芸術の准教授のゼミ生）</li>
      </ul>
      <p>
        計17人で2022年10月から2023年3月の半年間、数式検索エンジンを大学内で公開し事業性を確認するためにチーム開発を行いました。
        <br />
        <br />
        開発した数式検索エンジンは研究室のサーバで公開しています。
        検索用データベースを更新していないので、検索結果は開発当時のものになります。
        <br />
        <br />
        <ExternalLink href="https://eagle4.fu.is.saga-u.ac.jp/">
          数式検索エンジン
        </ExternalLink>
        <br />
        ログイン情報
        <br />
        メールアドレス：22801001@edu.cc.saga-u.ac.jp
        <br />
        パスワード&emsp;&ensp;：Hisashi1997
        <br />
        <br />
        <h4 className="font-semibold">【特許】</h4>
        数式検索に関する特許をPCT国際出願し、日本で権利化しました。
        <br />
        <ExternalLink href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-7371989/15/ja">
          特許第7371989号
        </ExternalLink>
      </p>
    </>
  )
}
