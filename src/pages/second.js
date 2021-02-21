import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Meta from "../components/meta"

export default () => (
  <Layout>
    <Meta
      title="Second"
      desc="2つ目のページです。"
    />
    <div>
      <p>2つ目のページコンテンツ</p>
      <Link to={"/"}>トップページへのリンク</Link>
    </div>
  </Layout>
)
