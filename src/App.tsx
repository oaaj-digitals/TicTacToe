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
import { GameContext, GamePlayers } from "./utils/GameContext";

function App() {
	const [theme, themeToggler] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	const [isLoading, setLoading] = useState(true);
	const [players, setPlayers] = useState<GamePlayers>({
		player1: {
			color: "",
			mark: "",
			wins: 0,
		},
		player2: {
			color: "",
			mark: "",
			wins: 0,
		},
	});

	return (
		<GameContext.Provider
			value={{ isLoading, setLoading, players, setPlayers }}
		>
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
						<Route
							path="/setting"
							element={<PlayerSelect />}
						></Route>
					</Routes>
				</ThemeProvider>
			</Router>
		</GameContext.Provider>
	);
}

export default App;
