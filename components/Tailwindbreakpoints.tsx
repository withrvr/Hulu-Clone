const Tailwindbreakpoints = () => {
	return (
		<div className="flex items-center justify-center   bg-violet-700 font-extrabold text-white   fixed m-2 rounded-full bottom-0 left-0 z-50   w-10 h-10 xl:w-20 xl:h-20 6xl:w-30 6xl:h-30 ">
			<span className="sm:hidden">def</span>
			<span className="hidden sm:inline md:hidden">sm</span>
			<span className="hidden md:inline lg:hidden">md</span>
			<span className="hidden lg:inline xl:hidden">lg</span>
			<span className="hidden xl:inline 2xl:hidden">xl</span>
			<span className="hidden 2xl:inline 3xl:hidden">2xl</span>
			<span className="hidden 3xl:inline 4xl:hidden">3xl</span>
			<span className="hidden 4xl:inline 5xl:hidden">4xl</span>
			<span className="hidden 5xl:inline 6xl:hidden">5xl</span>
			<span className="hidden 6xl:inline">6xl</span>
		</div>
	);
};

export default Tailwindbreakpoints;
