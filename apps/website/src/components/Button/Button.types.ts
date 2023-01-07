import type { ColorType, RadiusType } from '~src/types/globalTypes';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Button type attribute */
	type?: 'button' | 'reset' | 'submit';

	/** Button color */
	color?: ColorType;

	/** Button border-radius */
	radius?: RadiusType;

	/** Button label */
	children?: React.ReactNode;
}

export type ThemeType = Pick<IButtonProps, 'color' | 'radius'>;
