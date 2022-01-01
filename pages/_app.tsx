import { AppProps } from "next/app";
import Head from "next/head";

import NextNProgress from "nextjs-progressbar";

import Tailwindbreakpoints from "@/components/Tailwindbreakpoints";
import Header from "@/header/Header";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			{/* progress bar on change in router */}
			<NextNProgress
				color="#D97706"
				startPosition={0.0}
				stopDelayMs={0}
				// height={3}
				// showOnShallow={true}
			/>

			{/* <Tailwindbreakpoints /> */}

			<Head>
				<title>Default Title</title>
				<link rel="icon" href="/favicon.ico.png" />

				{/* meta tags */}
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<Header />

			<main className="container " id="main-content">
				<Component {...pageProps} />
			</main>
		</>
	);
};

export default App;
