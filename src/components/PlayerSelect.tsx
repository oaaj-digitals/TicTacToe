import { useContext, useRef, useState } from "react";
import { styled as s } from "styled-components";
import { O, X } from "./Icons";
import BgImage from "../assets/images/background.svg";
import Logo from "./Logo";
import BackBtn from "./BackBtn";
import { FormEvent } from "react";
import {
	GameContext,
	GameContextType,
	Player as P,
} from "../utils/GameContext";

const Section = s.section`
    width: 100%;
	height: 100vh;

	background-image: url(${BgImage});
	background-size: cover;
	background-position: center;

	display: flex;
    gap: 2rem;
	align-items: flex-start;
    flex-direction: column;

    padding: 3rem 3rem;
`;

const Container = s.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HR = s.div`
    height: 90%;
    border: 1px solid var(--text-color);
    position: absolute;
    left: 50%;
	z-index: 1000;
`;

const Player = s.div`
    width: calc(50% - 3rem);
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
	
    & > div {
        width: 100%;
        height: 60%;
		padding-left: 8rem;

		display: flex;
		flex-direction: column;
		gap: 4rem;


		& > h3 {
			font-size: 2.5rem;
			font-weight: 600;
		}

		& > div {
			display: flex;
			align-items: center;
			gap: 4rem;
		}
    }
`;

const InputDiv = s.div`
	width: 5rem;
	height: 5rem;
	display: block;
`;

const Input = s.input`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: none;

	&:checked ~ *{
		outline: 3px solid var(--text-color);
		outline-offset: 5px;
	}
`;

const ColorDiv = s.div`
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 1rem;

	&.color__div--red {
		background: var(--color-red-light);
	}

	&.color__div--blue {
		background: var(--color-blue-light);
	}
`;

const Label = s.label`
	display: block;
	width: 100%;
	height: 100%;
`;

const Title = s.h2`
	font-size: 5rem;
    letter-spacing: .09em;
`;

const StartBtn = s.button`
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    
    align-self: center;
`;

const PlayerSelect = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const { setPlayers } = useContext<GameContextType>(GameContext);

	const [player1, setPlayer1] = useState<P>({
		color: "",
		mark: "",
		wins: 0,
	});
	const [player2, setPlayer2] = useState<P>({
		color: "",
		mark: "",
		wins: 0,
	});

	const handleStartGame = (e: FormEvent) => {
		e.preventDefault();

		const form = formRef.current;
		const formData = new FormData(form!);

		setPlayer1({
			...player1,
			color: formData.get("player1_color"),
			mark: formData.get("player1_mark"),
		});

		setPlayer2({
			...player2,
			color: formData.get("player2_color"),
			mark: formData.get("player2_mark"),
		});

		setPlayers!({ player1: player1, player2: player2 });
	};

	return (
		<form ref={formRef} onSubmit={handleStartGame}>
			<Section>
				<Logo />
				<BackBtn to={"/"} />

				<Container>
					<Player id="player1">
						<Title>Player 1</Title>
						<div>
							<h3>Select</h3>
							<div>
								Color:
								<InputDiv>
									<Input
										type="radio"
										name="player1_color"
										value={"red"}
										id="player1_red"
									/>
									<Label htmlFor="player1_red">
										<ColorDiv className="color__div--red" />
									</Label>
								</InputDiv>
								<InputDiv>
									<Input
										type="radio"
										name="player1_color"
										value={"blue"}
										id="player1_blue"
									/>
									<Label htmlFor="player1_blue">
										<ColorDiv className="color__div--blue" />
									</Label>
								</InputDiv>
							</div>

							<div>
								Mark:
								<InputDiv>
									<Input
										type="radio"
										name="player1_mark"
										value={"x"}
										id="player1_x"
									/>
									<Label htmlFor="player1_x">
										<X
											length="5rem"
											fill="var(--text-color)"
										/>
									</Label>
								</InputDiv>
								<InputDiv>
									<Input
										type="radio"
										name="player1_mark"
										value={"o"}
										id="player1_o"
									/>
									<Label htmlFor="player1_o">
										<O
											length="5rem"
											fill="var(--text-color)"
										/>
									</Label>
								</InputDiv>
							</div>
						</div>
					</Player>
					<HR />
					<Player id="player2">
						<Title>Player 2</Title>
						<div>
							<h3>Select</h3>
							<div>
								Color:
								<InputDiv>
									<Input
										type="radio"
										name="player2_color"
										value={"red"}
										id="player2_red"
									/>
									<Label htmlFor="player2_red">
										<ColorDiv className="color__div--red" />
									</Label>
								</InputDiv>
								<InputDiv>
									<Input
										type="radio"
										name="player2_color"
										value={"blue"}
										id="player2_blue"
									/>
									<Label htmlFor="player2_blue">
										<ColorDiv className="color__div--blue" />
									</Label>
								</InputDiv>
							</div>

							<div>
								Mark:
								<InputDiv>
									<Input
										type="radio"
										name="player2_mark"
										value={"x"}
										id="player2_x"
									/>
									<Label htmlFor="player2_x">
										<X
											length="5rem"
											fill="var(--text-color)"
										/>
									</Label>
								</InputDiv>
								<InputDiv>
									<Input
										type="radio"
										name="player2_mark"
										value={"o"}
										id="player2_o"
									/>
									<Label htmlFor="player2_o">
										<O
											length="5rem"
											fill="var(--text-color)"
										/>
									</Label>
								</InputDiv>
							</div>
						</div>
					</Player>
				</Container>

				<StartBtn type="submit">Start Game</StartBtn>
			</Section>
		</form>
	);
};

export default PlayerSelect;
