import Document, { Html, Main, NextScript, Head } from 'next/document';

class MyDocument extends Document {
	// Only uncomment if you need to customize this behaviour
	// static async getInitialProps(ctx: DocumentContext) {
	//   const initialProps = await Document.getInitialProps(ctx)
	//   return {...initialProps}
	// }
	render() {
		return (
			<Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Poppins&display=swap" rel="stylesheet" />
        </Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
