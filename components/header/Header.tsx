import Image from "next/image";
import Link from "next/link";

import {
	HomeIcon,
	LightningBoltIcon,
	BadgeCheckIcon,
	CollectionIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";
import Headeritem from "@/header/Headeritem";

const Header = () => {
	return (
		<header className="container flex flex-col sm:flex-row items-center justify-between">
			{/* icons and lables */}
			<div className="flex flex-grow justify-between max-w-md lg:max-w-lg space-x-3 pt-5 ">
				<Headeritem title="HOME" Icon={HomeIcon} />
				<Headeritem title="TRENDING" Icon={LightningBoltIcon} />
				<Headeritem title="VERIFIED" Icon={BadgeCheckIcon} />
				<Headeritem title="COLLECTIONS" Icon={CollectionIcon} />
				<Headeritem title="SEARCH" Icon={SearchIcon} />
				<Headeritem title="ACCOUNT" Icon={UserIcon} />
			</div>

			<Link href="/#navigation">
				<a>
					<Image
						className="cursor-pointer"
						layout="fixed"
						objectFit="cover"
						src="/logo.svg"
						alt="Hulu logo"
						width={1000 * 0.13}
						height={330 * 0.13}
					/>
				</a>
			</Link>
		</header>
	);
};

export default Header;
