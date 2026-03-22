import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Saumay Khandelwal — Senior Software Engineer at Google. Building scalable systems, LLM-powered tools, and occasionally Mars rovers."
        />
        <meta property="og:title" content="Saumay Khandelwal" />
        <meta
          property="og:description"
          content="Senior Software Engineer at Google. I build things that scale."
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
