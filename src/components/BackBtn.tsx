import { To, useNavigate } from "react-router-dom";
import { styled as s } from "styled-components";

const Btn = s.a`
    position: fixed;
    top: 8rem;
    right: 8rem;

    letter-spacing: 2px;
    font-weight: normal;
`;

interface Props {
	to: To;
}

const BackBtn = ({ to }: Props) => {
	const navigate = useNavigate();

	const goBack = (to: To) => {
		navigate(to);
	};

	return (
		<Btn
			onClick={() => {
				goBack(to);
			}}
		>
			back
		</Btn>
	);
};

export default BackBtn;
