// frontend/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          {/* Добавьте метатеги и шрифты, если нужно */}
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
