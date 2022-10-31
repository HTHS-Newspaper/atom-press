import Category from "../Category";

const articles = [
	{
		name: "Kanye West introduces new milk derivative food called “Cheezys”",
		author: "John Doe",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
	},
	{
		name: "Hurrican Ian Causes Billions in Damage",
		author: "John Doe",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
	},
	{
		name: "Minecraft Live: 2022 Approaches",
		author: "John Doe",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
	},
	{
		name: "Elon Musk Will Buy Twitter",
		author: "John Doe",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
	},
];

export default function News() {
	return <Category title="U.S. and World News" articles={articles} />;
}
