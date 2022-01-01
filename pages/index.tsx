import Head from "next/head";
import { GetServerSideProps } from "next";

import Navigation from "@/home/Navigation";
import Results from "@/home/Results";

import requests from "@/lib/requests";
import ResultsType from "@/type/ResultsType";

export default function Home({ results }: { results: ResultsType[] }) {
	return (
		<>
			<Head>
				<title> Hulu Clone </title>
			</Head>

			<>
				<Navigation />
				<Results results={results} />
			</>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const default_navigation = "trending";
	const genre = context.query.genre?.toString() || default_navigation;
	const url = requests[genre]?.url || requests[default_navigation].url;

	const request = await fetch(url).then((res) => res.json());

	return {
		props: {
			results: request.results,
		},
	};
};
