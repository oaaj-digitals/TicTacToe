export interface Theme {
	body: string;
	text: string;
	colorRedLight: string;
	colorRedDark: string;
	colorBlueLight: string;
	colorBlueDark: string;
}

const theme: Theme = {
	body: "",
	text: "",
	colorRedLight: "#f57b60",
	colorRedDark: "#995244",
	colorBlueLight: "#15788d",
	colorBlueDark: "#194e5b",
};

export const lightTheme = {
	...theme,
	body: "#fafafa",
	text: "#1e1e1e",
};

export const darkTheme = {
	...theme,
	text: "#fafafa",
	body: "#1e1e1e",
};
