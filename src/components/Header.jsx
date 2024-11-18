import React from "react";
import DeskPicture from "../assets/image-hero-desktop.png";
import Databiz from "../assets/client-databiz.svg";
import Audiophile from "../assets/client-audiophile.svg";
import Meet from "../assets/client-meet.svg";
import Maker from "../assets/client-maker.svg";

const Header = () => {
	return (
		<div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 px-6 lg:px-40 py-10 lg:py-20">
			<div className="text-center lg:text-left">
				<div className="flex flex-col gap-20">
					<div className="flex flex-col gap-12">
						<h1 className="font-bold text-4xl lg:text-7xl leading-tight">
							Make remote work
						</h1>
						<p className="text-base lg:text-xl text-gray-500 font-medium">
							Get your team in sync, no matter your location.
							Streamline processes, create team rituals, and watch
							productivity soar.
						</p>
						<div>
							<a
								href="#"
								className="bg-black text-white px-6 py-3 lg:px-8 lg:py-5 rounded-lg font-semibold text-base lg:text-xl"
							>
								Learn more
							</a>
						</div>
					</div>
					<div className="flex justify-center lg:justify-start gap-2 lg:gap-8">
						<img
							src={Databiz}
							alt="Databiz logo"
							className="h-5 md:h-8"
						/>
						<img
							src={Audiophile}
							alt="Audiophile logo"
							className="h-5 md:h-8"
						/>
						<img
							src={Meet}
							alt="Meet logo"
							className="h-5 md:h-8"
						/>
						<img
							src={Maker}
							alt="Maker logo"
							className="h-5 md:h-8"
						/>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-1/2">
				<img src={DeskPicture} alt="Hero desktop" />
			</div>
		</div>
	);
};

export default Header;
