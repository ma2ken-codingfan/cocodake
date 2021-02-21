import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from "../components/image"
import Meta from "../components/meta"

export default () => (
  <Layout>
    <Meta
      title="Home"
      desc="Gatsby.jsの使い方を説明するためのサンプルページです。"
    />
    <div>
      <p> トップページのコンテンツ</p>
      <Image filename="sample.jpg" alt="サンプル画像" />
      <Link to={"/second"}>secondページへのリンク</Link>
    </div>
  </Layout>
)
