import { createContext } from "react";

export interface Player {
	color: FormDataEntryValue | string | null;
	mark: FormDataEntryValue | string | null;
	wins: number;
}

export interface GamePlayers {
	player1: Player;
	player2: Player;
}

export interface GameContextType {
	isLoading?: boolean;
	setLoading?: (isLoading: boolean) => void;
	players?: GamePlayers;
	setPlayers?: (player: GamePlayers) => void;
}

export const GameContext = createContext<GameContextType>({});
