import Layout from "../components/Layout";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<NextNProgress
				color={"#D97706"}
				startPosition={0.0}
				stopDelayMs={0}
				// height={3}
				// showOnShallow={true}
			/>

			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
