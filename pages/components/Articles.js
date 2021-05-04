import Link from 'next/link'
import Image from 'next/image'
const Articles = ({ search, articles }) => {
  return (
    <ul className="grid justify-center max-w-lg px-2 mx-auto my-0 lg:grid-cols-2 lg:max-w-none lg:px-4">
      {articles
        .filter((article) => {
          if (search === '') return article
          else if (
            article.fields.title.toLowerCase().includes(search.toLowerCase())
          )
            return article
          else if (
            article.fields.subtitle.toLowerCase().includes(search.toLowerCase())
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
  )
}
export default Articles
