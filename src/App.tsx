import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./utils/globalStyles";
import { lightTheme, darkTheme } from "./utils/theme";
import ThemeToggler from "./components/ThemeToggler";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
	const [theme, themeToggler] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;
	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<ThemeToggler
				theme={theme as "light" | "dark"}
				toggleTheme={themeToggler as () => void}
			/>
		</ThemeProvider>
	);
}

export default App;
