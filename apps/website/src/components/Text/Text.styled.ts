import type { CSSObject } from 'styled-components';
import styled from 'styled-components';

import { GlobalColorsTypes } from '~src/constants';

import type { ThemeType } from './Text.types';

export const Component = styled.p`
	margin: 0;
	line-height: 1.8;

	${({ theme }: { theme: ThemeType }) => {
		const css = {} as CSSObject;

		css.color = GlobalColorsTypes[theme.color];

		css.fontSize = `${theme.size}px`;

		css.padding = theme.padding;

		css.fontWeight = theme.fontWeight;

		return css;
	}};
`;
