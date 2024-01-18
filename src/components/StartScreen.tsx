import { styled as s } from "styled-components";
import { O, X } from "./Icons";
import BgImage from "../assets/images/background.svg";
import { useNavigate } from "react-router-dom";

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

const StartScreen = () => {
	const navigate = useNavigate();

	const loadGame = () => {
		setTimeout(() => {
			navigate("/loading");
		}, 1000);
	};

	return (
		<Container>
			<LogoContainer>
				<X fill={"var(--color-red-light)"} length="7rem" />
				<O fill={"var(--color-blue-light)"} length="7rem" />
				<X fill={"var(--color-red-light)"} length="7rem" />
				<O fill={"var(--color-blue-light)"} length="7rem" />
			</LogoContainer>

			<Title>Tic Tac Toe</Title>

			<StartBtn onClick={loadGame}>Start Now</StartBtn>
		</Container>
	);
};

export default StartScreen;
