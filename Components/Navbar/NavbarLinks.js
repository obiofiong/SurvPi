import Link  from "next/link";
function NavbarLinks() {
	return (
		<div className="hidden sm:block text-sm font-bold mx-6">
			<ul className="flex items-center space-x-4">
				<li className="cursor-pointer"> Products</li>
				<li className="cursor-pointer">Categories</li>
				<li className="cursor-pointer"> About</li>
			</ul>
		</div>
	);
}

export default NavbarLinks;