import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
	return (
		<>
			<Head>
				<title>Hulu</title>
			</Head>

			<div className="container">
				<Header />
				<div className="text-justify">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Voluptatem eum eaque, quasi recusandae corrupti
					exercitationem quos quisquam reprehenderit molestiae illum
					magnam sed ad ea corporis, possimus odio doloribus harum
					incidunt. Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. Voluptatem eum eaque, quasi recusandae
					corrupti exercitationem quos quisquam reprehenderit
					molestiae illum magnam sed ad ea corporis, possimus odio
					doloribus harum incidunt.
				</div>
			</div>
		</>
	);
}
