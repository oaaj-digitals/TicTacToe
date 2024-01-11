import { styled as s, keyframes } from "styled-components";
import { O, X } from "./Icons";
import BgImage from "../assets/images/background.svg";

const loadingFades = keyframes`
	from {
		opacity: 0;
		bottom: 2.5rem;
	}
	to {
		opacity: 1;
		bottom: 0;
	}
`;

const Container = s.div`
	width: 100%;
	height: 100vh;

	background-image: url(${BgImage});
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;

const Title = s.h1`
	font-family: "Kamikaze";
	letter-spacing: 5px;
	font-size: 6rem;
	font-weight: normal;
`;

const LogoContainer = s.div`
	display: flex;
	gap: 10px;

	& > .animate {
		animation-name: ${loadingFades};
		// animation-delay: 1s;
		animation-duration: 1s;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
	}

	& > .animate:first-child {
		animation-delay: 0s;
	}

	& > .animate:nth-child(2) {
		animation-delay: .3s;
	}

	& > .animate:nth-child(3) {
		animation-delay: .6s;
	}

	& > .animate:nth-child(4) {
		animation-delay: .9s;
	}
`;

const StartBtn = s.a`
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    position: absolute;
    bottom: 20vh;
    left: 50%;

    transform: translateX(-50%);
`;

interface Props {
	isLoading: boolean;
	gameStarter: () => void;
}

const StartScreen = ({ isLoading, gameStarter }: Props) => {
	return (
		<Container>
			<LogoContainer>
				<X
					fill={"var(--color-red-light)"}
					length="7rem"
					className={isLoading ? "animate" : ""}
				/>
				<O
					fill={"var(--color-blue-light)"}
					length="7rem"
					className={isLoading ? "animate" : ""}
				/>
				<X
					fill={"var(--color-red-light)"}
					length="7rem"
					className={isLoading ? "animate" : ""}
				/>
				<O
					fill={"var(--color-blue-light)"}
					length="7rem"
					className={isLoading ? "animate" : ""}
				/>
			</LogoContainer>

			{!isLoading && <Title>Tic Tac Toe</Title>}

			<StartBtn onClick={gameStarter}>
				{!isLoading ? "Start Now" : "Cancel"}
			</StartBtn>
		</Container>
	);
};

export default StartScreen;
