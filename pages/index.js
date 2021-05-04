import Head from 'next/head'
import Portfolio from './components/Portfolio'
import Dark from './components/Dark'
import Intro from './components/Intro'
import SearchBox from './components/SearchBox'
import Articles from './components/Articles'
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticProps = async () => {
  let article = await client.getEntries({
    content_type: 'article',
  })
  return {
    props: {
      articles: article.items,
    },
    revalidate: 15,
  }
}

export const Home = ({ articles }) => {
  // console.log(articles)
  const { query } = useRouter()
  // console.log(query.search)
  const [search, setSearch] = useState('')

  useEffect(() => {
    query.search ? setSearch(query.search) : null
  }, [query])

  useEffect(() => {
    localStorage.getItem('nightwind-mode') === 'dark'
      ? document.documentElement.classList.add('dark')
      : null
  }, [])

  return (
    <>
      <Head>
        <title>Palminister Blog</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦜</text></svg>"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com/"></link>
        <meta
          name="description"
          content="Palminister Blog, by Thanapat (Palm) Jumnongrat"
        ></meta>
      </Head>
      <div>
        <header>
          <Portfolio />
          <Dark />
          <Intro />
          <SearchBox setSearch={setSearch} />
        </header>
        <main className="w-screen h-auto font-sans">
          <Articles search={search} articles={articles} />
        </main>
      </div>
    </>
  )
}

export default Home
