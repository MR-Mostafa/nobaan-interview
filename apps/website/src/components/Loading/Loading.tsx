import { forwardRef } from 'react';

import { Component } from './Loading.styled';
import type { ILoadingProps } from './Loading.types';

export const Loading = forwardRef<HTMLDivElement, ILoadingProps>((props, ref) => {
	const { color, isCenter, padding, ...rest } = props;

	const theme = { color, isCenter, padding };
	return (
		<Component ref={ref} theme={theme} role="status" {...rest}>
			<div className="loading">
				<span className="visually-hidden">Loading...</span>
			</div>
		</Component>
	);
});

Loading.displayName = 'Loading';

Loading.defaultProps = {
	color: 'danger',
};
