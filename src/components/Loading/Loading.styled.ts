import type { CSSObject } from 'styled-components';
import styled, { keyframes } from 'styled-components';

import { GlobalColorsTypes } from '~src/constants';

import type { ILoadingProps, LoadingType } from './Loading.types';

const loadingAnimation = keyframes`
 	to {
		transform: rotate(360deg);
	}
`;

export const Component = styled('div')<ILoadingProps>`
	${({ theme }: { theme: LoadingType }) => {
		const css = {} as CSSObject;

		if (theme.isCenter) {
			css.display = 'flex';
			css.alignContent = 'center';
			css.justifyContent = 'center';
		}

		if (theme.padding) {
			css.padding = theme.padding;
		}

		return css;
	}};

	.loading {
		display: inline-block;
		width: 3rem;
		height: 3rem;
		vertical-align: -0.125em;
		border-radius: 50%;
		animation: ${loadingAnimation} linear infinite 0.75s;
		border: 0.3em solid currentcolor;
		border-right-color: transparent;

		${({ theme }: { theme: LoadingType }) => {
			const css = {} as CSSObject;

			css.color = GlobalColorsTypes[theme.color];

			return css;
		}};

		.visually-hidden {
			position: absolute !important;
			width: 1px !important;
			height: 1px !important;
			padding: 0 !important;
			margin: -1px !important;
			overflow: hidden !important;
			clip: rect(0, 0, 0, 0) !important;
			white-space: nowrap !important;
			border: 0 !important;
		}
	}
`;
