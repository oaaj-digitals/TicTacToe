import { createContext } from "react";

interface GameContextType {
	isLoading: boolean;
	setLoading: (isLoading: boolean) => void;
}

export const GameContext = createContext<GameContextType | undefined>(
	undefined
);
