import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
const dayjs = require('dayjs')

const ArticleContent = ({ categories, article }) => {
  return (
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
          <p className="pr-1">{'By ' + article.fields.author.fields.name}</p>
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
  )
}
export default ArticleContent
