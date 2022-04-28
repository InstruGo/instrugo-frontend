import Document, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from 'styles/stitches.config';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="App for connecting students and knowledgeable tutors. Find your topic of interest among math, physics, languages and many more."
          />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
