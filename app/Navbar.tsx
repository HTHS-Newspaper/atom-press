"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Sidebar from "./Sidebar";
import AtomLogo from "../public/AtomLogo.png";

interface Props {
	page: string;
}

export default function Navbar(props: Props) {
	const [sidebar, setSidebar] = useState(false);

	return (
		<nav className="pb-[5.25rem] md:pb-0">
			<div className="fixed z-50 w-full bg-default md:relative  py-4 border-b-[3px] border-bordermaroon mx-auto mb-8">
				<div className="flex px-8 md:grid md:grid-cols-3 md:mx-0 justify-items-stretch">
					{/* tab logo */}
					<button
						className="inline-flex justify-start my-auto"
						onClick={() => setSidebar(!sidebar)}
					>
						<svg
							width="57"
							height="57"
							viewBox="0 0 57 57"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="h-[30px] md:h-10 w-auto   hover:scale-105 duration-200 ease-in-out"
						>
							<path
								d="M25.375 6.625H6.625V50.375H25.375V6.625ZM31.625 6.625V50.375H50.375V6.625H31.625ZM3.5 0.375H53.5C54.3288 0.375 55.1237 0.70424 55.7097 1.29029C56.2958 1.87634 56.625 2.6712 56.625 3.5V53.5C56.625 54.3288 56.2958 55.1237 55.7097 55.7097C55.1237 56.2958 54.3288 56.625 53.5 56.625H3.5C2.6712 56.625 1.87634 56.2958 1.29029 55.7097C0.70424 55.1237 0.375 54.3288 0.375 53.5V3.5C0.375 2.6712 0.70424 1.87634 1.29029 1.29029C1.87634 0.70424 2.6712 0.375 3.5 0.375V0.375Z"
								fill="#97266D"
							/>
						</svg>
					</button>

					<Sidebar
						page={props.page}
						showSidebar={sidebar}
						closeBar={setSidebar}
					/>

					<div
						className={`fixed top-0 left-0 z-40 bg-black opacity-0 duration-200 ease-in-out ${
							sidebar && "h-screen w-screen opacity-50"
						}`}
					></div>

					{/* browser logo */}
					<div className="flex mx-auto justify-self-center">
						<Link href="/">
							<Image
								src={AtomLogo}
								alt="Atom Logo"
								className="my-auto md:h-[5.5rem] h-[3.7rem] hover:scale-105 duration-200 ease-in-out"
							/>
						</Link>
					</div>

					<Link
						href="/dashboard"
						className="inline-flex justify-end my-auto"
					>
						<button className="h-10 px-6 font-semibold rounded-lg text-default bg-bordermaroon">
							Contribute
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
