import { styled as s } from "styled-components";
import { Link } from "react-router-dom";
import { X, O } from "./Icons";

const LogoContainer = s.div`
	cursor: pointer;

    & > a, & > a:hover {
		color: var(--text-color) !important;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: .5rem;
	}
`;

const Title = s.h1`
	font-family: "Kamikaze";
	letter-spacing: 2px;
	font-size: 2rem;
	font-weight: normal;
`;

const IconContainer = s.div`
	display: flex;
	gap: 5px;
`;

const Logo = () => {
	return (
		<LogoContainer>
			<Link to="/">
				<IconContainer>
					<X fill={"var(--color-red-light)"} length="2rem" />
					<O fill={"var(--color-blue-light)"} length="2rem" />
					<X fill={"var(--color-red-light)"} length="2rem" />
					<O fill={"var(--color-blue-light)"} length="2rem" />
				</IconContainer>

				<Title>Tic Tac Toe</Title>
			</Link>
		</LogoContainer>
	);
};

export default Logo;
