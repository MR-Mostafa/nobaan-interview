import type { CSSObject } from 'styled-components';

export interface IPortalProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
	bodyClassName?: string;
	withBackdrop?: boolean;
	styles?: CSSObject;
	isOpen: boolean;
}

export type PortalType = Pick<IPortalProps, 'withBackdrop'>;
