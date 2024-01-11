import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./utils/globalStyles";
import { lightTheme, darkTheme } from "./utils/theme";
import ThemeToggler from "./components/ThemeToggler";
import { useDarkMode } from "./hooks/useDarkMode";
import StartScreen from "./components/StartScreen";

function App() {
	const [theme, themeToggler] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	const [isLoading, setLoading] = useState(false);
	const startGame = () => {
		setTimeout(() => {
			setLoading(!isLoading);
		}, 1000);
	};

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles theme={themeMode} />
			<ThemeToggler
				theme={theme as "light" | "dark"}
				toggleTheme={themeToggler as () => void}
			/>

			<StartScreen isLoading={isLoading} gameStarter={startGame} />
		</ThemeProvider>
	);
}

export default App;
