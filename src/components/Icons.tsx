interface Props {
	fill?: string;
	length?: string;
}

export const X = ({ fill, length }: Props) => {
	return (
		<svg
			width={length || "100%"}
			height={length || "100%"}
			viewBox="0 0 315 315"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3.36152 57.5025C-9.28291 23.7039 23.7039 -9.28285 57.5024 3.36158L142.76 35.2573C152.265 38.8133 162.735 38.8133 172.24 35.2573L257.497 3.36158C291.296 -9.28285 324.283 23.7039 311.638 57.5025L279.743 142.76C276.187 152.265 276.187 162.735 279.743 172.24L311.638 257.498C324.283 291.296 291.296 324.283 257.497 311.638L172.24 279.743C162.735 276.187 152.265 276.187 142.76 279.743L57.5024 311.638C23.7039 324.283 -9.28291 291.296 3.36152 257.498L35.2572 172.24C38.8132 162.735 38.8132 152.265 35.2572 142.76L3.36152 57.5025Z"
				fill={fill || "#1e1e1e"}
			/>
		</svg>
	);
};

export const O = ({ fill, length }: Props) => {
	return (
		<svg
			width={length || "100%"}
			height={length || "100%"}
			viewBox="0 0 315 315"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M315 157.5C315 244.485 244.485 315 157.5 315C70.5152 315 0 244.485 0 157.5C0 70.5152 70.5152 0 157.5 0C244.485 0 315 70.5152 315 157.5Z"
				fill={fill || "#1e1e1e"}
			/>
		</svg>
	);
};

export const Sun = ({ fill, length }: Props) => {
	return (
		<svg
			width={length || "100%"}
			height={length || "100%"}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.058 2.64324C19.3737 1.7575 20.6263 1.7575 20.942 2.64325L22.9635 8.31584C23.1837 8.93366 23.929 9.17582 24.4702 8.80541L29.44 5.40441C30.216 4.87336 31.2294 5.60965 30.9641 6.51177L29.2653 12.2892C29.0803 12.9185 29.5409 13.5525 30.1965 13.5709L36.2162 13.7406C37.1561 13.7671 37.5432 14.9584 36.7983 15.5323L32.0281 19.2079C31.5085 19.6082 31.5085 20.3918 32.0281 20.7921L36.7983 24.4677C37.5432 25.0416 37.1561 26.2329 36.2162 26.2594L30.1965 26.4291C29.5409 26.4475 29.0803 27.0815 29.2653 27.7108L30.9641 33.4882C31.2294 34.3904 30.216 35.1266 29.44 34.5956L24.4702 31.1946C23.929 30.8242 23.1837 31.0663 22.9635 31.6842L20.942 37.3568C20.6263 38.2425 19.3737 38.2425 19.058 37.3568L17.0365 31.6842C16.8163 31.0663 16.071 30.8242 15.5298 31.1946L10.56 34.5956C9.78403 35.1266 8.77062 34.3904 9.03588 33.4882L10.7347 27.7108C10.9197 27.0815 10.4591 26.4475 9.80348 26.4291L3.78383 26.2594C2.84389 26.2329 2.45681 25.0416 3.20166 24.4677L7.97193 20.7921C8.49147 20.3918 8.49147 19.6082 7.97193 19.2079L3.20166 15.5323C2.45681 14.9584 2.8439 13.7671 3.78383 13.7406L9.80348 13.5709C10.4591 13.5525 10.9197 12.9185 10.7347 12.2892L9.03588 6.51177C8.77062 5.60965 9.78403 4.87337 10.56 5.40441L15.5298 8.80541C16.071 9.17582 16.8163 8.93366 17.0365 8.31584L19.058 2.64324Z"
				fill={fill || "#fafafa"}
			/>
			<g filter="url(#filter0_d_257_98)">
				<circle cx="20" cy="20" r="12" fill={fill || "#fafafa"} />
			</g>
			<defs>
				<filter
					id="filter0_d_257_98"
					x="4"
					y="4"
					width="32"
					height="32"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_257_98"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_257_98"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export const Moon = ({ fill, length }: Props) => {
	return (
		<svg
			width={length || "100%"}
			height={length || "100%"}
			viewBox="0 0 25 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.448281 22.1321C-0.1079 21.4105 0.661072 20.4706 1.56362 20.5945C2.62976 20.7409 3.73442 20.7397 4.85255 20.5723C11.1655 19.6274 15.5172 13.7437 14.5722 7.43067C14.2694 5.40746 13.4593 3.58569 12.2903 2.07516C11.7333 1.35535 12.165 0.221799 13.067 0.343811C18.9111 1.13438 23.7777 5.69178 24.6947 11.8177C25.8073 19.2508 20.6836 26.1784 13.2506 27.291C8.1906 28.0484 3.36485 25.9158 0.448281 22.1321Z"
				fill={fill || "#1e1e1e"}
			/>
		</svg>
	);
};