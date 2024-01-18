import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";
import { GlobalStyles } from "./utils/globalStyles";
import { lightTheme, darkTheme } from "./utils/theme";
import ThemeToggler from "./components/ThemeToggler";
import { useDarkMode } from "./hooks/useDarkMode";
import StartScreen from "./components/StartScreen";
import PlayerSelect from "./components/PlayerSelect";
import LoadingScreen from "./components/LoadingScreen";
import { GameContext } from "./utils/GameContext";

function App() {
	const [theme, themeToggler] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	const [isLoading, setLoading] = useState(true);

	return (
		<GameContext.Provider value={{ isLoading, setLoading }}>
			<Router>
				<ThemeProvider theme={themeMode}>
					<GlobalStyles theme={themeMode} />
					<ThemeToggler
						theme={theme as "light" | "dark"}
						toggleTheme={themeToggler as () => void}
					/>

					<Routes>
						<Route path="/" element={<StartScreen />}></Route>
						<Route
							path="/loading"
							element={<LoadingScreen />}
						></Route>
					</Routes>
				</ThemeProvider>
			</Router>
		</GameContext.Provider>
	);
}

export default App;
