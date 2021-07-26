import { Link } from "gatsby";
import React from "react";
import Logo from "../images/logo.png";

const Footer = () => (
	<footer className="w-10/12 mx-auto">
		<div>
			<div className="flex flex-col md:flex-row py-6">
				<div className="flex-1 md:mr-14 filter grayscale ">
					<Link to="/">
						<figure>
							<img src={Logo} alt="logo" />
						</figure>
					</Link>
				</div>
				<div className="flex-1 mr-4 mt-6 md:mt-0">
					<p className="  mb-2 md:mb-5 font-NeueBold">Contact</p>
					<ul className="  font-NeueLight text-[#2D2D2D]">
						<li className="  inline-block mr-2 md:block md:mr-0">
							Address : 71 Sulawesi , <br /> South Jakarta Indonesia 8122
						</li>
						<li className="mt-1 md:mt-4  mr-2 md:block md:mr-0">
							Call : 8008881211
						</li>
					</ul>
				</div>
				<div className="flex-1 mt-4 md:mt-0">
					<p className="  md:mb-5 font-NeueBold">Solutions</p>
					<ul className="font-NeueLight text-[#2D2D2D]">
						<li className=" inline-block mr-2 md:block md:mr-0">
							<Link to="/">
								<span className="hover:underline  text-sm mb-3">
									Human Resource
								</span>
							</Link>
						</li>
						<li className="mt-3 inline-block mr-2 md:block md:mr-0">
							<Link to="/">
								<span className="hover:underline   mb-3">Sales Cycle</span>
							</Link>
						</li>
						<li className="mt-3 inline-block mr-2 md:block md:mr-0">
							<Link to="/">
								<span className="hover:underline ">See all</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex-1 mt-4 md:mt-0">
					<p className="  md:mb-5 font-NeueBold">Company</p>
					<ul className="font-NeueLight text-[#2D2D2D]">
						<li className=" inline-block mr-2 md:block md:mr-0">
							<Link to="/">
								<span className="hover:underline  text-sm mb-3">
									Human Resource
								</span>
							</Link>
						</li>
						<li className="mt-3 inline-block mr-2 md:block md:mr-0">
							<Link to="/">
								<span className="hover:underline   mb-3">Sales Cycle</span>
							</Link>
						</li>
						<li className="mt-3 inline-block mr-2 md:block md:mr-0">
							<Link to="/">
								<span className="hover:underline ">See all</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex-1 mt-4 md:mt-0">
					<p className="  md:mb-5 font-NeueBold">Links</p>
					<ul className="font-NeueLight text-[#2D2D2D]">
						<li className=" inline-block mr-2 md:block md:mr-0">
							<Link to="/">
								<span className="hover:underline  text-sm mb-3">Pricing</span>
							</Link>
						</li>
						<li className="mt-3 inline-block mr-2 md:block md:mr-0">
							<Link to="/">
								<span className="hover:underline   mb-3">Demo</span>
							</Link>
						</li>
						<li className="mt-3 inline-block mr-2 md:block md:mr-0">
							<Link to="/">
								<span className="hover:underline ">Download</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
