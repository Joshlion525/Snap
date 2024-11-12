import React from "react";
import Logo from "../assets/logo.svg"

const Navbar = () => {
	return (
		<div className="flex justify-between items-center py-8 px-16 text-base">
			<div className="flex items-center gap-20">
				<div>
					<a href="#">
						<img src={Logo} alt="" />
					</a>
				</div>
				<div>
					<ul className="flex items-center gap-10 text-[hsl(0, 0%, 41%)]">
						<li>
							<a href="">Features</a>
						</li>
						<li>
							<a href="">Company</a>
						</li>
						<li>
							<a href="">Careers</a>
						</li>
						<li>
							<a href="">About</a>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<ul className="flex items-center gap-10">
					<li>
						<a href="#">Login</a>
					</li>
					<li>
						<a
							href="#"
							className="border-2 border-[hsl(0, 0%, 41%)] py-3 px-5 rounded-2xl"
						>
							Register
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
