import { colorType, radiusType } from '~src/types/globalTypes';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Button type attribute */
	type?: 'submit' | 'button' | 'reset';

	/** Button color */
	color?: colorType;

	/** Button border-radius */
	radius?: radiusType;

	/** Button label */
	children?: React.ReactNode;
}

export type ThemeType = Pick<IButtonProps, 'color' | 'radius'>;
