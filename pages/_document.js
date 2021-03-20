import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from './components/Footer'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body className="bg-gradient-to-r from-gray-50 to-white">
          <Main />
          <NextScript />
        </body>
        <Footer />
      </Html>
    )
  }
}

export default MyDocument
