import Head from 'next/head'
import HomeButton from '../components/HomeButton'
import Portfolio from '../components/Portfolio'
import Dark from '../components/Dark'
import ArticleContent from '../components/ArticleContent'
import React from 'react'

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  let data = await client.getEntries({
    content_type: 'article',
  })
  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  let data = await client.getEntries({
    content_type: 'article',
    'fields.slug': params.slug,
  })
  return {
    props: {
      article: data.items[0],
    },
    revalidate: 15,
  }
}

export const Article = ({ article }) => {
  // console.log(article)
  if (!article)
    return <h1 className="font-sourcecode">404 This Page is Dead</h1>

  const categories = article.fields.category
  return (
    <>
      <Head>
        <title>Palminister Blog • {article.fields.title}</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦜</text></svg>"
        ></link>
        <meta name="description" content={article.fields.subtitle}></meta>
        <base target="_blank"></base>
      </Head>
      <header>
        <Portfolio />
        <Dark />
        <HomeButton />
      </header>
      <main className="h-auto max-w-4xl p-4 mx-auto">
        <ArticleContent categories={categories} article={article} />
      </main>
    </>
  )
}

export default Article
