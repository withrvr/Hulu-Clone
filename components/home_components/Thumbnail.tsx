import Image from "next/image";

import { ThumbUpIcon } from "@heroicons/react/outline";

import ResultsType from "@/type/ResultsType";

const Thumbnail = ({ result }: { result: ResultsType }) => {
	// console.log(result);
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

	const image = `${IMAGE_BASE_URL}${
		result.backdrop_path || result.poster_path
	}`;

	const movie_name =
		result.title ||
		result.original_title ||
		result.name ||
		result.original_name ||
		"Not Found ??";

	return (
		<div className="group cursor-pointer hover:scale-105 transition-transform ">
			<Image
				layout="responsive"
				src={image}
				alt={movie_name + " image"}
				width={1920}
				height={1080}
			/>

			<p className="truncate my-1">{result.overview}</p>

			<h3 className="text-2xl group-hover:text-white transition-transform">
				{movie_name}
			</h3>

			<div className="flex items-center gap-1 xl:opacity-0 group-hover:opacity-100 ">
				<span>{result.media_type && `${result.media_type} •`}</span>
				<span>{result.release_date || result.first_air_date} • </span>
				<ThumbUpIcon className="w-5" />
				<span>{result.vote_count}</span>
			</div>
		</div>
	);
};

export default Thumbnail;
