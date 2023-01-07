import type { CSSObject } from 'styled-components';
import styled from 'styled-components';

import type { PortalType } from './Portal.types';

export const Wrapper = styled.div`
	${({ theme }: { theme: PortalType }) => {
		const css = {} as CSSObject;

		if (theme.withBackdrop) {
			css.position = 'fixed';
			css.top = 0;
			css.bottom = 0;
			css.right = 0;
			css.left = 0;
			css.width = '100vw';
			css.height = '100vh';
			css.zIndex = 1000;
			css.padding = ' 1.5rem 2rem';
		}

		return css;
	}}
`;

export const Backdrop = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 999;

	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	backdrop-filter: blur(1.5px);

	&::before {
		content: '';
		position: fixed;
		z-index: 998;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		display: block;
		background-color: #000;
		opacity: 0.5;
	}
`;
