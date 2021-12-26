type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;

const Headeritem = ({ Icon, title }: { Icon: HeroIcon; title: string }) => {
	return (
		<div className="flex flex-col items-center w-8 md:w-9 group hover:text-white">
			<Icon className="group-hover:animate-bounce mb-1" />
			<p className="uppercase opacity-0 group-hover:opacity-100 tracking-widest">
				{title}
			</p>
		</div>
	);
};

export default Headeritem;
