import Category from "../Category";

const articles = [
	{
		name: "Halloween Dance 2022",
		author: "John Doe",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
	},
	{
		name: "High Tech Named #2 Best STEM High School - U.S. News",
		author: "John Doe",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
	},
	{
		name: "The Junior Student Council raises $1,500+ during Movie Night",
		author: "John Doe",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
	},
	{
		name: "Get Ready for the PSAT",
		author: "John Doe",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
	},
];

export default function HighTech() {
	return <Category title="@High Tech" articles={articles} />;
}
