import type { CSSObject } from 'styled-components';
import styled from 'styled-components';
import Values from 'values.js';

import type { IButtonProps, ThemeType } from './Button.types';

export const GlobalColorsTypes = {
	danger: '#dc3545',
	primary: '#007bff',
	warning: '#ffc107',
	success: '#28a745',
	dark: '#212529',
};

export const GlobalRadiusTypes = {
	rounded: '4px',
	circle: '50%',
	pill: '50rem',
};

export const Component = styled('button')<IButtonProps>`
	padding: 3px 7px 5px;
	min-width: 125px;
	height: 44px;
	border: 1px solid transparent;
	position: relative;
	overflow: hidden;
	box-shadow: 0 0 4px 0px #00000061;
	transition: all 0.15s ease-in-out;

	&:active {
		filter: brightness(0.5);
	}

	${({ theme }: { theme: ThemeType }) => {
		const css = {} as CSSObject;

		if (theme.color) {
			const value = GlobalColorsTypes[theme.color];
			css.backgroundColor = value;
			css.color = theme.color === 'warning' ? '#3b2c00' : '#fff';

			css[':hover'] = {
				backgroundColor: new Values(value).shade(7).hexString(),
			};

			css[':active'] = {
				backgroundColor: new Values(value).shade(20).hexString(),
			};
		}

		if (theme.radius) {
			const value = typeof theme.radius === 'number' ? `${theme.radius}px` : GlobalRadiusTypes[theme.radius];
			css.borderRadius = value;
		}

		return css;
	}};
`;
