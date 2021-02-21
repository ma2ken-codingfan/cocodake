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
      <button class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
        Tailwind test
      </button>
      <Image filename="sample.jpg" alt="サンプル画像" />
      <Link to={"/second"}>secondページへのリンク</Link>
    </div>
  </Layout>
)
