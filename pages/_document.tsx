import Document, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from 'styles/stitches.config';

/**
 * This custom document is rendered on the server. Head contains metadata that all pages have in common.
 *
 * Font are linked here, too.
 */
export default class CustomDocument extends Document {
  render() {
    const styles = getCssText();

    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="App for connecting students and knowledgeable tutors. Find your topic of interest among math, physics, languages and many more."
          />
          {/* By default browser looks the favicon in the root dir, specify the location here */}
          <link rel="icon" href="/favicon.ico" />

          {/* FONTS */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />

          <style dangerouslySetInnerHTML={{ __html: styles }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
