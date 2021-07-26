import React from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../images/logo.png";
import { Link } from "gatsby";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
	const isMobile = useMediaQuery({ maxWidth: 1100 });
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<header className="bg-[#FFF8F7]">
			{isMobile ? (
				<nav className="flex items-center justify-between w-10/12 mx-auto py-10 ">
					<Link
						to="/"
						className="flex items-center justify-center dark:text-white"
					>
						<img src={logo} alt="Eslam Hesham" className="mr-3 sm:mr-4" />
					</Link>
					<ul className="flex items-center justify-end ">
						<li className="ml-4">
							<Hamburger toggled={open} toggle={setOpen} color={"#0A4C73"} />
							{open && (
								<ul className="absolute top-24 w-40 p-4 rounded-lg  transform -translate-x-3/4 overflow-hidden font-NeueLight text-sm bg-white">
									<li className="p-2">
										<Link
											to="/"
											onClick={() => {
												handleClose();
											}}
										>
											About Pylon
										</Link>
									</li>
									<li className="p-2">
										<Link
											to="/"
											onClick={() => {
												handleClose();
											}}
										>
											Solutions
										</Link>
									</li>
									<li className="p-2">
										<Link
											to="/"
											onClick={() => {
												handleClose();
											}}
										>
											Pricing
										</Link>
									</li>
									<li className="p-2">
										<Link
											to="/"
											onClick={() => {
												handleClose();
											}}
										>
											Clients
										</Link>
									</li>
									<li className="p-2">
										<Link
											to="/"
											onClick={() => {
												handleClose();
											}}
										>
											Clients
										</Link>
									</li>
									<li className="p-2">
										<Link
											to="/"
											onClick={() => {
												handleClose();
											}}
										>
											Contact Us
										</Link>
									</li>
									<li>
										<button
											className="px-2 py-3 bg-[#F05736] rounded-md text-white font-NeueBold"
											onClick={() => {
												handleClose();
											}}
										>
											Request Demo
										</button>
									</li>
								</ul>
							)}
						</li>
					</ul>
				</nav>
			) : (
				<nav className="py-10 w-10/12 mx-auto flex  justify-between bg-[#FFF8F7]">
					<ul className="flex  items-center ">
						<li className="mr-14">
							<figure>
								<img src={logo} alt="Logo" className="w-[112px] h-[21px]" />
							</figure>
						</li>
						<li className="text-sm font-NeueLight mr-14">
							<Link to="/">About Pylon</Link>
						</li>
						<li className="text-sm font-NeueLight mr-14">
							<Link to="/">Solutions</Link>
						</li>
						<li className="text-sm font-NeueLight mr-14">
							<Link to="/">Pricing</Link>
						</li>
						<li className="text-sm font-NeueLight mr-14">
							<Link to="/">Clients</Link>
						</li>
						<li className="text-sm font-NeueLight">
							<Link to="/">Clients</Link>
						</li>
					</ul>
					<ul className="flex  items-center ">
						<li className="text-sm font-NeueLight mr-10">
							<Link to="/">Contact Us</Link>
						</li>
						<li>
							<button className="px-8 py-4 bg-[#F05736] rounded-md text-white font-NeueBold">
								Request Demo
							</button>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};
export default Navbar;
