"use client";

import Link from "next/link";
import { useState } from "react";
import { Exo, Quicksand } from "@next/font/google";

import { UserCircleIcon } from "@heroicons/react/24/outline";
import Navbar from "../Navbar";

export interface Article {
	name: string;
	author: string;
	content: string;
}

interface Props {
	title: string;
	articles: Article[];
}

const exo = Exo();
const quicksand = Quicksand();

export default function Category(props: Props) {
	const [view, setView] = useState(true);

	return (
		<div className="min-h-screen bg-default pb-14 ">
			{/* Navbar */}
			<Navbar page={props.title} />

			<div className="pt-3 ">
				{/* Header */}
				<div className="grid grid-cols-4 md:grid-cols-3 mx-auto max-w-[100rem] my-8 md:my-0 px-8 ">
					<button
						className="inline-flex justify-start my-auto"
						onClick={() => setView(!view)}
					>
						<svg
							width="75"
							height="75"
							viewBox="0 0 75 75"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={`h-[30px] md:h-10 w-auto hover:scale-105 duration-200 ease-in-out ${
								view ? "" : "rotate-180"
							}`}
						>
							<path
								d="M31.25 53.125C31.25 54.8509 32.6491 56.25 34.375 56.25H40.625C42.3509 56.25 43.75 54.8509 43.75 53.125V53.125C43.75 51.3991 42.3509 50 40.625 50H34.375C32.6491 50 31.25 51.3991 31.25 53.125V53.125ZM12.5 18.75C10.7741 18.75 9.375 20.1491 9.375 21.875V21.875C9.375 23.6009 10.7741 25 12.5 25H62.5C64.2259 25 65.625 23.6009 65.625 21.875V21.875C65.625 20.1491 64.2259 18.75 62.5 18.75H12.5ZM18.75 37.5C18.75 39.2259 20.1491 40.625 21.875 40.625H53.125C54.8509 40.625 56.25 39.2259 56.25 37.5V37.5C56.25 35.7741 54.8509 34.375 53.125 34.375H21.875C20.1491 34.375 18.75 35.7741 18.75 37.5V37.5Z"
								fill="#97266D"
							/>
						</svg>
					</button>
					<header
						className={`flex justify-center col-span-2 md:col-span-1 ${exo.className} text-3xl md:text-4xl mx-auto max-w-[100rem] font-extrabold`}
					>
						<div className="headerbold flex text-center md:mx-0 text-bordermaroon pb-4 border-b-[3px] border-bordermaroon">
							{props.title}
						</div>
					</header>
				</div>

				{/* Contents */}
				{view ? (
					<div className="px-8 mx-auto max-w-[100rem] md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
						{props.articles.map((item) => (
							<Link
								key={item.name}
								href="/article"
								className="flex row-span-1 drop-shadow-lg md:mr-12  mt-2 w-[100%] overflow-hidden bg-white place-content-center rounded-xl hover:scale-[1.02] duration-200 ease-in-out"
							>
								<div className="p-6 w-[100%] border-b-4 border-bordermaroon">
									<div className="grid grid-cols-3">
										<div
											className={`headerbold col-span-2 text-3xl tracking-tight text-center text-headermaroon sm:text-4xl md:text-left ${exo.className}`}
										>
											{item.name}
										</div>
										<div className="flex justify-end">
											<UserCircleIcon className="text-headermaroon h-[75px]" />
										</div>
									</div>
									<div className="position-relative py-8 ">
										<div
											className={`text-2xl ${quicksand.className}`}
										>
											{item.content}
										</div>
									</div>
								</div>
							</Link>
						))}

						{/* End */}
					</div>
				) : (
					<div
						className={`grid-rows- px-8 mx-auto max-w-[100rem] md:mt-10 grid grid-cols-1${props.articles.length} `}
					>
						{props.articles.map((item) => (
							<Link
								key={item.name}
								href="/article"
								className="flex row-span-1 md:mr-12 hover:bg-white bg-default w-[100%] overflow-hidden place-content-center hover:scale-y-[1.02] duration-200 ease-in-out"
							>
								<div
									className={`flex w-[100%]  ${
										props.articles.indexOf(item) === 0
											? "border-t-[3px] border-b-[1.5px] "
											: props.articles.indexOf(item) ===
											  props.articles.length - 1
											? "border-b-[3px] border-t-[1.5px] "
											: "border-y-[1.5px]"
									} border-bordermaroon py-4`}
								>
									<div className="flex justify-start ">
										<UserCircleIcon className="text-headermaroon my-auto h-[75px]" />
									</div>

									<div className="flex my-auto ml-4">
										<div
											className={`headerbold flex my-auto text-3xl text-headermaroon ${exo.className}`}
										>
											{item.author}
										</div>
										<div
											className={`headerbold flex mx-2 my-auto text-3xl text-headermaroon ${exo.className}`}
										>
											-
										</div>
										<div
											className={`headerbold flex my-auto text-3xl text-headermaroon ${exo.className}`}
										>
											{item.name}
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
