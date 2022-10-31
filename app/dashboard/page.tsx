import Navbar from "../Navbar";

export default function Dashboard() {
	return (
		<div className="min-h-screen bg-default pb-14 ">
			<Navbar page="Dashboard" />

			<div className="px-8 pt-3 md:grid-cols-2 md:grid">
				<div>Left</div>
				<div>Right</div>
			</div>
		</div>
	);
}
