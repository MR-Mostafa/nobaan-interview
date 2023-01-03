import { ReactNode } from 'react';

interface IContainer {
	children: ReactNode;
}

export const Container = ({ children }: IContainer) => {
	return (
		<div className="container">
			<div className="py-3">{children}</div>
		</div>
	);
};
