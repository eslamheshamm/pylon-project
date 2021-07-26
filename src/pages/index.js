import * as React from "react";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";

import Footer from "../components/footer";

// images
import logo from "../images/logo.png";
import businessManagementDash from "../images/business_management_dashboard.png";
import nero from "../images/nero.png";
import sleek from "../images/sleek.png";
import hollow from "../images/hollow.png";
import fresco from "../images/fresco.png";
import rocket from "../images/svg/rocket.svg";
import truck from "../images/svg/truck.svg";
import financial from "../images/svg/financial.svg";
import target from "../images/svg/target.svg";

const Navbar = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	return (
		<nav className="py-10 w-10/12 mx-auto flex  justify-between bg-[#FFF8F7]">
			{isMobile ? (
				""
			) : (
				<div>
					{" "}
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
					<ul className="flex flex-col md:items-center ">
						<li className="text-sm font-NeueLight mr-10">
							<Link to="/">Contact Us</Link>
						</li>
						<li>
							<button className="px-8 py-4 bg-[#F05736] rounded-md text-white font-NeueBold">
								Request Demo
							</button>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};
const IndexPage = () => {
	const [landed, setLanded] = React.useState(false);
	if (!landed) {
		return (
			<section className="bg-[#FFF8F7] min-h-screen pt-[137px] text-center">
				<figure>
					<img src={logo} alt="Logo" className="mx-auto" />
				</figure>
				<h1 className="text-5xl font-NeueBold mt-[267px] text-[#0A4C73] ">
					Welcome to Pylon <br /> Prototype
				</h1>
				<button
					className="px-8 py-4 bg-[#F05736] rounded-md text-white font-NeueBold  mt-6"
					onClick={() => {
						setTimeout(() => {
							setLanded(true);
						}, 5000);
					}}
				>
					Home Page
				</button>
			</section>
		);
	}
	return (
		<main>
			<title>Home Page</title>
			{/* <Navbar /> */}

			<section className="min-h-screen flex items-center justify-center bg-[#FFF8F7]">
				<div className="">
					<div className="grid lg:grid-cols-2  w-10/12 mx-auto  ">
						<article className="mb-10">
							<h1 className=" font-NeueBold text-[#0A4C73] text-5xl ">
								Reliable smart energy <br /> solutions within the reach <br />{" "}
								of emerging markets.
							</h1>
							<p className="font-NeueLight text-xl mt-8 mb-[60px]">
								Pylon is a comprehensive utility management platform (UMP)
								transforming conventional electricity and water utilities in
								emerging markets into efficient, interoperable and data driven
								ones.
							</p>
							<button className="px-8 py-4 bg-[#F05736] rounded-md text-white font-NeueBold">
								Request Demo
							</button>
						</article>
						<article className="flex justify-center items-center row-start-1 lg:row-start-auto ">
							<figure>
								<img
									src={businessManagementDash}
									alt="Business Management Dashboard"
								/>
							</figure>
						</article>
					</div>
				</div>
			</section>
			<section className=" w-10/12 mx-auto">
				<h2 className=" font-NeueBold text-4xl text-center mt-[104px] mb-6">
					4 Simple Steps.
				</h2>
				<p className="text-sm font-NeueLight text-center">
					Subscribe. Receive. Save up to 75% of losses. Activate
				</p>
				<ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] ">
					<li className="flex flex-col items-center text-center p-8 shadow-lg">
						<figure>
							<img src={rocket} alt="Subscribe" />
						</figure>
						<h3 className="font-NeueBold text-xl my-6">Subscribe</h3>
						<p className="font-NeueLight text-sm mb-5">
							Subscribe to Pylon to begin your transition to a smart utility.
						</p>
						<button className="px-8 py-3 bg-[#F05736] rounded-md text-white font-NeueBold">
							Request Demo
						</button>
					</li>
					<li className="flex flex-col items-center text-center px-6 py-8 ">
						<figure>
							<img src={truck} alt="Receive" />
						</figure>
						<h3 className="font-NeueBold text-xl my-6">Receive</h3>
						<p className="font-NeueLight text-sm">
							Receive smart meters and communication equipment installed by
							Pylon with no upfront capital investment thanks to our SMaaS
							model.
						</p>
					</li>
					<li className="flex flex-col items-center text-center  py-8 ">
						<figure>
							<img src={financial} alt="Save up to 75% of losses" />
						</figure>
						<h3 className="font-NeueBold text-xl my-6">
							Save up to 75% of losses
						</h3>
						<p className="font-NeueLight text-sm">
							Save up to 75% of losses, gain real-time insights into your smart
							grid.
						</p>
					</li>
					<li className="flex flex-col items-center text-center px-5 py-8 ">
						<figure>
							<img src={target} alt="Activate" />
						</figure>
						<h3 className="font-NeueBold text-xl my-6">Activate</h3>
						<p className="font-NeueLight text-sm">
							Activate Pylon UMP and get access to round the clock support and
							real time monitoring of energy consumption.
						</p>
					</li>
				</ul>
			</section>
			<section className="w-10/12 mx-auto mb-[105px]  ">
				<h2 className="text-[#F05736] font-NeueBold text-4xl text-center mt-[104px] mb-6">
					Why Pylon?
				</h2>
				<p className="text-sm font-NeueLight text-center">
					Comprehensiveness. Affordability. Interoperability.{" "}
				</p>
				<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[85px]">
					<li className="text-center p-8 shadow-lg">
						<h3 className="text-2xl font-NeueBold mb-6">Comprehensiveness</h3>
						<p className="text-sm font-NeueLight">
							Pylon caters to the unique needs of emerging markets, covering all
							aspects of loss reduction, load management and revenue collection.
						</p>
					</li>
					<li className="text-center py-8 px-5 ">
						<h3 className="text-2xl font-NeueBold mb-6">Affordability</h3>
						<p className="text-sm font-NeueLight">
							We are pioneering a smart-meter-as-a-service solution that
							simplifies cost of deployment, operation and maintenance of smart
							metering solutions into a single recurring fee per meter, with no
							upfront investment.
						</p>
					</li>
					<li className="text-center py-8 px-5 ">
						<h3 className="text-2xl font-NeueBold mb-6">Interoperability</h3>
						<p className="text-sm font-NeueLight">
							Our solution is meter agnostic, allowing emerging markets to
							leapfrog from fragmented legacy infrastructures to a seamless
							modern solution.
						</p>
					</li>
				</ul>
			</section>
			<section className="w-10/12 mx-auto grid md:grid-cols-2 gap-5  items-center mb-[104px] ">
				<article>
					<h2 className=" font-NeueBold  text-4xl  ">
						Trusted By Huge Company
					</h2>
					<p className="font-NeueLight text-xl my-6">
						We plessed collaborate with companies <br /> all size, from startup
						to famous brands.
					</p>
					<button className="px-8 py-4 bg-[#F05736] rounded-md text-white font-NeueBold">
						Request Demo
					</button>
				</article>
				<article className="flex items-center justify-center md:items-end md:justify-end row-start-1 md:row-start-auto">
					<div>
						<figure className="p-2">
							<img src={nero} alt="nero company logo" />
						</figure>
						<figure className="p-2">
							<img src={fresco} alt="fresco company logo" />
						</figure>
					</div>
					<div>
						<figure className="p-2">
							<img src={sleek} alt="sleek company logo" />
						</figure>
						<figure className="p-2">
							<img src={hollow} alt="hollow company logo" />
						</figure>
					</div>
				</article>
			</section>
			<Footer />
		</main>
	);
};

export default IndexPage;
