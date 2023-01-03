import styled, { CSSObject } from 'styled-components';

import { globalColors } from '~src/constants';

import type { ThemeType } from './Text.types';

export const Component = styled.p`
	margin: 0;
	line-height: 1.8;

	${({ theme }: { theme: ThemeType }) => {
		const css = {} as CSSObject;

		css.color = globalColors[theme.color];

		css.fontSize = `${theme.size}px`;

		css.padding = theme.padding;

		css.fontWeight = theme.fontWeight;

		return css;
	}};
`;
