import Thumbnail from "@/home/Thumbnail";
import ResultsType from "@/type/ResultsType";

const Results = ({ results }: { results: ResultsType[] }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-4 ">
			{results.map((result: ResultsType) => {
				return <Thumbnail key={result.id} result={result} />;
			})}

			{/* <Thumbnail key={results[0].id} result={results[0]} />
			<Thumbnail key={results[1].id} result={results[1]} />
			<Thumbnail key={results[2].id} result={results[2]} /> */}
		</div>
	);
};

export default Results;
