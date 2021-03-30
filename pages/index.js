import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Intro from './components/Intro'
import Dark from './components/Dark'
import React from 'react'
import { useEffect } from 'react'

let client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
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

export default function Home({ articles }) {
  // console.log(articles)
  useEffect(() => {
    localStorage.getItem('nightwind-mode') === 'dark'
      ? document.documentElement.classList.add('dark')
      : null
  }, [])
  return (
    <React.Fragment>
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
          <Dark />
          <Intro />
        </header>
        <main className="w-screen h-auto font-sans">
          <ul className="grid justify-center max-w-lg px-2 mx-auto my-0 lg:grid-cols-2 lg:max-w-none lg:px-4">
            {articles.map((article) => (
              <li
                key={article.sys.id}
                className="flex flex-col m-6 overflow-hidden transition duration-300 transform rounded-lg shadow-lg cursor-pointer bg-gray-50 ow-span-3 hover:shadow-xl hover:scale-102"
              >
                <Link href={'/articles/' + article.fields.slug}>
                  <div className="card">
                    <a>
                      <Image
                        src={'https:' + article.fields.banner.fields.file.url}
                        width={
                          article.fields.banner.fields.file.details.image.width
                        }
                        height={
                          article.fields.banner.fields.file.details.image.height
                        }
                        alt={article.fields.banner.fields.title}
                      />
                      <div className="p-5 pt-3">
                        <ul className="flex flex-row p-0 my-0 ml-5 space-x-6">
                          {article.fields.category.map((category) => (
                            <li
                              key={category.fields.key}
                              // mx-5
                              className="text-sm font-semibold text-blue-600"
                            >
                              {category.fields.name}
                            </li>
                          ))}
                        </ul>
                        <h2 className="my-2 text-xl text-black ">
                          {article.fields.title}
                        </h2>
                        <p className="my-1 font-light text-gray-500 text-md">
                          {article.fields.subtitle}
                        </p>
                      </div>
                    </a>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </React.Fragment>
  )
}
