import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const Error404 = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>404 - Page Not Found</title>
			</Head>

			<div className="my-20 text-center">
				<div className="my-2">
					<h1 className="text-9xl font-semibold my-2">404</h1>
					<h4 className="text-xl">Page Not Found</h4>
				</div>

				<div className="link" onClick={() => router.back()}>
					Go back
				</div>

				<Link href="/">
					<a className="link text-sm">Go to Home Page</a>
				</Link>
			</div>
		</>
	);
};

export default Error404;
