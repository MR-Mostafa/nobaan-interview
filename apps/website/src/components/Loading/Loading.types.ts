import type { ColorType } from '~src/types/globalTypes';

export interface ILoadingProps extends React.HTMLAttributes<HTMLDivElement> {
	color?: ColorType;
	isCenter?: boolean;
	padding?: string;
}

export type LoadingType = Required<Pick<ILoadingProps, 'color' | 'isCenter' | 'padding'>>;
