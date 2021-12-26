import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Head>
				<title>Default Title</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main>{children}</main>
		</>
	);
};

export default Layout;
