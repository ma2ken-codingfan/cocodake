# 【Gatsby.js】「ここだけ押さえれば普通に使える」をやってみた

## url

[【Gatsby.js】「ここだけ押さえれば普通に使える」って知識をまとめてみた](https://qiita.com/d0ne1s/items/c3a41236168ede833b85)

<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## npm install

```bash
$ gatsby new
✔ What is your project called? … my_project #プロジェクト名
✔ What starter would you like to use? › gatsby-starter-hello-world # 一番シンプルなスターターを選択
$ cd my_project
$ gatsby develop

```

## 画像を最適化して表示

「画像の最適化こそがGatsby.jsを使う最大の理由」と言っても過言では無いくらいの目玉機能です。

劣化が目立たない範囲で圧縮
webp対応のブラウザではjpgやpngの画像もwebpで表示
デバイスのサイズや解像度に応じて適切なサイズで表示
遅延読み込み
といった画像の最適化を、比較的少ない設定で実現することができます。
ここでは簡単さを重視して細かいな説明は省略します。
より深く知りたい方は、gatsby 画像 static queryというキーワードで調べて見てください。

- picture 

```bash
$ yarn add gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp gatsby-source-filesystem 

```

## メタデータを設定

- プラグインを追加

```bash
$ yarn add gatsby-plugin-react-helmet react-helmet
```
## Tailwind CSSの導入

TailwindCSS、PostCSSをインストール

```bash
$ yarn add gatsby-plugin-postcss

$ yarn add tailwindcss --dev # tailwind cssをインストール
$ yarn tailwindcss init # tailwind cssの設定ファイルを生成
$ touch postcss.config.js # postcssの設定ファイルを生成
```

