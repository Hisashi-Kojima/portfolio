'use client'

import ExternalLink from '../ExternalLink'
import MermaidChart from '../MermaidChart'

const chartCode1 = `
  graph TD;
    user((ユーザ)) -- クエリ --> MathJax
    MathJax --> Nginx
    Nginx --> Django
    Django --> クエリ解析
`

const chartCode2 = `
  graph TD;
    クエリ解析 -- 自然言語 --> Solr
    Solr -- 検索結果 --> UI
`

const chartCode3 = `
  graph TD;
    クエリ解析 -- LaTeX --> latex2mathml
    latex2mathml -- MathML --> 字句/構文解析
    字句/構文解析 --> 数式検索
    数式検索 --> MySQL
    MySQL --> 数式検索
    数式検索 -- 検索結果 --> UI
`

const chartCode4 = `
  graph TD;
    MathML --> Scrapy
    MathJax --> Scrapy
    Scrapy --> 字句/構文解析
    字句/構文解析 --> Indexer
    Indexer --> MySQL
`

export default function SearchEngineDetails() {
  return (
    <>
      <h4 className="font-semibold">【数式検索エンジンの構成】</h4>
      <p>
        検索エンジンはWebページを自動で収集するクローラー、
        集めたデータをデータベースに登録するインデクサー、
        データベースなどで構成されています。
      </p>
      <p>
        一人でこれら全てを開発する余裕はなく、
        ScrapyというクローラーのフレームワークがPythonにあったので、
        Pythonで開発しました。
      </p>
      <p>
        データベースはよく使われているMySQLとPostgreSQLの2つを検討しました。
        検索エンジンは多くのリクエストをさばく必要があるので、
        メモリ使用量が比較的少量で済みそうなMySQLを選びました。
      </p>
      <div className="border rounded-sm p-4 bg-white dark:bg-zinc-800">
        <p>
          UIで数式をレンダーするためにMathJaxを使用しています。
          PythonでWebアプリを作るためにDjangoを使用しています。
        </p>
        <br />
        <p>【検索側】</p>
        <MermaidChart chart={chartCode1} />
        <br />
        <p>【検索側】クエリが自然言語の場合</p>
        <p>自然言語での検索にはApache Solrを使用しています。</p>
        <MermaidChart chart={chartCode2} />
        <br />
        <p>【検索側】クエリが数式の場合</p>
        <p>
          ユーザからの数式の入力は直感的に書きやすいLaTeXで受け付け、
          クローラー側と同じ形式であるMathMLに変換して処理しています。
        </p>
        <MermaidChart chart={chartCode3} />
        <br />
        <p>【登録側】</p>
        <p>
          WebページにMathMLかMathJaxが含まれる場合にそこからMathMLを取得して、
          検索しやすい形に処理した後でIndexerでデータベースに登録しています。
        </p>
        <MermaidChart chart={chartCode4} />
        <br />
        <p>これらはDocker Composeで管理しました。</p>
      </div>
      <p>
        開発した数式検索エンジンは研究室のサーバで公開しています。
        検索用データベースを更新していないので、検索結果は開発当時のものになります。
        また、いくつかのサイトのみクロールしているので、すべてのサイトを検索できる訳ではありません。
      </p>
      <p>
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
      </p>
    </>
  )
}
