import Image from 'next/image'
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Dark from '../components/Dark'
import React from 'react'

const dayjs = require('dayjs')

let client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths() {
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

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'article',
    'fields.slug': params.slug,
  })
  return {
    props: {
      article: data.items[0],
    },
    revalidate: 1,
  }
}

export default function Article({ article }) {
  // console.log(article)
  if (!article)
    return <h1 className="font-sourcecode">404 This Page is Dead</h1>
  let categories = article.fields.category
  return (
    <React.Fragment>
      <Head>
        <title>Palminister Blog • {article.fields.title}</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦜</text></svg>"
        ></link>
        <meta name="description" content={article.fields.subtitle}></meta>
      </Head>
      <Dark />
      <header>
        <div className="max-w-xl px-5 pt-24 mx-auto text-center py-14">
          <span className="block pb-5 text-5xl transition duration-200 transform cursor-default md:text-6xl lg:text-7xl hover:scale-125">
            <a href="/">🚀</a>
          </span>
          <a
            href="/"
            className="p-2 text-blue-600 transition duration-200 bg-blue-100 rounded-full hover:opacity-70 font-sourcecode"
          >
            Home
          </a>
        </div>
      </header>
      <main className="h-auto max-w-4xl p-4 mx-auto">
        <div className="overflow-hidden rounded-lg shadow-2xl bg-gray-50">
          <Image
            src={'https:' + article.fields.banner.fields.file.url}
            width={article.fields.banner.fields.file.details.image.width}
            height={article.fields.banner.fields.file.details.image.height}
            alt={article.fields.banner.fields.title}
          />
          <div className="px-6 pt-4 pb-8 text-black lg:px-8">
            <h1>{article.fields.title}</h1>
            {/* <p className="text-gray-600">{article.fields.subtitle}</p> */}
            <div className="flex font-light text-gray-500 text-md">
              <p className="pr-1">
                {'By ' + article.fields.author.fields.name}
              </p>
              <p>
                {'on '}
                {dayjs(article.fields.date).format('DD MMM YYYY')}
              </p>
            </div>
            <ul className="flex justify-center p-0 ml-5 space-x-6 sm:justify-start">
              {categories.map((category) => (
                <li
                  key={category.fields.key}
                  className="text-sm font-semibold text-blue-600"
                >
                  {category.fields.name}
                </li>
              ))}
            </ul>
            <div className="max-w-3xl pt-6 mx-auto">
              {documentToReactComponents(article.fields.content, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: (node) => (
                    <Image
                      src={'https:' + node.data.target.fields.file.url}
                      width={node.data.target.fields.file.details.image.width}
                      height={node.data.target.fields.file.details.image.height}
                      className="rounded-lg"
                      alt={node.data.target.fields.title}
                    />
                  ),
                },
              })}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}
