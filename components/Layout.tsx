import Head from "next/head";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Head>
				<title>Default Title</title>
				<link rel="icon" href="/favicon.ico.png" />
			</Head>

			<main>{children}</main>
		</>
	);
};

export default Layout;
