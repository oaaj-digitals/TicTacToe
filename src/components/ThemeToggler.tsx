import { styled as s } from "styled-components";
import { Moon, Sun } from "./Icons";

const length = "2.5rem";

const Toggle = s.div`
    width: 8rem;
    height: 3.3rem;
    padding: 0 .5rem;
    border-radius: 5vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    position: fixed;
    top: 3rem;
    right: 5rem;


    background-color: var(--text-color);
    color: var(--body-color);
    z-index: 100000;

`;

const ToggleBtn = s.div`
    width: ${length};
    height: ${length};
    border-radius: ${length};
    background-color: var(--body-color);
    cursor: pointer;
`;

interface Props {
	theme: string;
	toggleTheme: () => void;
}

const ThemeToggler = ({ theme, toggleTheme }: Props) => {
	return (
		<Toggle>
			{theme === "light" ? <Sun fill="#fafafa" length={length} /> : null}
			<ToggleBtn onClick={toggleTheme}></ToggleBtn>
			{theme === "dark" ? <Moon fill="#1e1e1e" length={length} /> : null}
		</Toggle>
	);
};

export default ThemeToggler;
