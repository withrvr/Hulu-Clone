import { useRouter } from "next/router";
import genresData from "../utils/requests";

const Navigation = () => {
	const router = useRouter();
	const genre = router.query.genre || "trending";
	// TODO: show "trending" Nav / url
	// FIXME: if incorrect / random url genre

	return (
		<div className="sticky top-0 z-50 bg-primary">
			<nav id="navigation" className="relative ">
				<div className=" flex space-x-10 md:space-x-15 xl:space-x-20   overflow-x-scroll overflow-y-hidden scrollbar-hide   whitespace-nowrap text-2xl   pt-5 pb-8 pl-3">
					{Object.entries(genresData).map(([key, { title, url }]) => {
						const activeNav =
							genre === key ? " text-white scale-125 " : "";

						return (
							<div
								key={key}
								onClick={() => {
									router.push(`/?genre=${key}`);
								}}
								className={
									"cursor-pointer transition-transform hover:text-white hover:scale-125 active:text-red-500  " +
									activeNav
								}
							>
								{title}
							</div>
						);
					})}

					{/* padding after last lnk */}
					<div className="pr-10 lg:pr-32 xl:pr-40 2xl:pr-56" />
				</div>

				{/* blur effect */}
				<div className="absolute top-0 right-0 bg-gradient-to-l from-primary h-full w-1/12 lg:w-2/12 " />
			</nav>
		</div>
	);
};

export default Navigation;
