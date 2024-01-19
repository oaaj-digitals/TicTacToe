import { styled as s, keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { O, X } from "./Icons";
import BgImage from "../assets/images/background.svg";
import { useContext, useEffect } from "react";
import { GameContext, GameContextType } from "../utils/GameContext";

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

const CancelBtn = s.a`
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    position: absolute;
    bottom: 20vh;
    left: 50%;

    transform: translateX(-50%);
`;

const LoadingScreen = () => {
	const navigate = useNavigate();

	const handleCancelLoading = () => {
		navigate(-1);
	};

	const { isLoading, setLoading } = useContext<GameContextType>(GameContext);

	useEffect(() => {
		const load = setTimeout(() => {
			isLoading ? navigate("/setting") : null;
		}, 4000);

		return () => {
			clearTimeout(load);
			setLoading!(false);
		};
	}, []);

	return (
		<Container>
			<LogoContainer>
				<X
					fill={"var(--color-red-light)"}
					length="7rem"
					className="animate"
				/>
				<O
					fill={"var(--color-blue-light)"}
					length="7rem"
					className="animate"
				/>
				<X
					fill={"var(--color-red-light)"}
					length="7rem"
					className="animate"
				/>
				<O
					fill={"var(--color-blue-light)"}
					length="7rem"
					className="animate"
				/>
			</LogoContainer>

			<CancelBtn onClick={handleCancelLoading}>Cancel</CancelBtn>
		</Container>
	);
};

export default LoadingScreen;
