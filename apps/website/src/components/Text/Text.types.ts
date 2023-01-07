import type { ColorType } from '~src/types/globalTypes';

export interface ITextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	/** Text content */
	children: React.ReactNode;

	/** Text size in px */
	size?: number;

	/** Text color */
	color?: ColorType;

	/** Text Padding */
	padding?: string;

	/** Text fontWai */
	fontWeight?: 'bold' | 'bolder' | 'normal' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export type ThemeType = Required<Pick<ITextProps, 'color' | 'fontWeight' | 'padding' | 'size'>>;
