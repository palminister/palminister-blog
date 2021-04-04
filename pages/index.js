import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Intro from './components/Intro'
import Dark from './components/Dark'
import React from 'react'
import { useState, useEffect } from 'react'

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
  const [search, setSearch] = useState('')
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
          <div className="flex justify-end max-w-lg px-2 pr-8 mx-auto my-0 lg:pr-10 lg:max-w-none lg:px-4 font-sourcecode">
            <div class="relative max-w-xs">
              <div class="absolute inset-y-0 h-10 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 text-gray-400 h-4"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                class="w-32 mb-2 h-10 pl-9 text-gray-500 border-gray-200 rounded-full bg-white focus:outline-none transition duration-300 focus:border-green-300 placeholder-gray-500"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </header>
        <main className="w-screen h-auto font-sans">
          <ul className="grid justify-center max-w-lg px-2 mx-auto my-0 lg:grid-cols-2 lg:max-w-none lg:px-4">
            {articles
              .filter((article) => {
                if (search === '') return article
                else if (
                  article.fields.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                  return article
                else if (
                  article.fields.subtitle
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                  return article
              })
              .map((article) => (
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
                            article.fields.banner.fields.file.details.image
                              .width
                          }
                          height={
                            article.fields.banner.fields.file.details.image
                              .height
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
