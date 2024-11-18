import React from "react";
import Logo from "../assets/logo.svg";
import { GoChevronDown } from "react-icons/go";

const Navbar = () => {
	return (
		<div className="flex flex-wrap items-center justify-between py-8 px-4 md:px-8 text-base font-semibold">
			<div className="flex items-center gap-5 lg:gap-16">
				<div>
					<a href="#">
						<img src={Logo} alt="Logo" className="h-8 md:h-10" />
					</a>
				</div>
				<div className="hidden md:flex items-center gap-6 md:gap-10 mt-4 md:mt-0">
					<ul className="flex flex-col md:flex-row items-center gap-4 lg:gap-10 text-gray-500">
						<li>
							<a
								href="#"
								className="hover:text-black flex items-center gap-2"
							>
								Features <GoChevronDown />
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-black flex items-center gap-2"
							>
								Company <GoChevronDown />
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-black">
								Careers
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-black">
								About
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="hidden md:flex items-center gap-4 lg:gap-10 text-gray-500 mt-4 md:mt-0">
				<a href="#" className="hover:text-black">
					Login
				</a>
				<a
					href="#"
					className="border-2 border-gray-500 py-2 px-4 rounded-xl hover:text-black hover:border-black"
				>
					Register
				</a>
			</div>
            <div className="md:hidden">
                <a href="#">Menu</a>
            </div>
		</div>
	);
};

export default Navbar;
