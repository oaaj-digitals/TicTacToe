import { useEffect, useState } from "react";

export const useDarkMode = () => {
	const [theme, setTheme] = useState<"light" | "dark">("light");
	const setMode = (mode: "light" | "dark") => {
		window.localStorage.setItem("theme", mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === "light" ? setMode("dark") : setMode("light");
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		localTheme && setTheme(localTheme as "light" | "dark");
	}, []);

	return [theme, themeToggler];
};
