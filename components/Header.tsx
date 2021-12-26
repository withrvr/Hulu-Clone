import Image from "next/image";
import Headeritem from "./Headeritem";
import {
	HomeIcon,
	LightningBoltIcon,
	BadgeCheckIcon,
	CollectionIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
	return (
		<header className="flex flex-col md:flex-row items-center justify-between">
			{/* icons and lables */}
			<div className="flex flex-grow justify-between max-w-md lg:max-w-lg space-x-3 pt-5 ">
				<Headeritem title="HOME" Icon={HomeIcon} />
				<Headeritem title="TRENDING" Icon={LightningBoltIcon} />
				<Headeritem title="VERIFIED" Icon={BadgeCheckIcon} />
				<Headeritem title="COLLECTIONS" Icon={CollectionIcon} />
				<Headeritem title="SEARCH" Icon={SearchIcon} />
				<Headeritem title="ACCOUNT" Icon={UserIcon} />
			</div>

			<Image
				layout="fixed"
				objectFit="cover"
				src="/logo.png"
				alt="Hulu logo"
				width={128 * 1.5}
				height={68 * 1.5}
			/>
		</header>
	);
};

export default Header;
