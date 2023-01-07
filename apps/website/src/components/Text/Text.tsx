import { forwardRef } from 'react';

import cx from 'classnames';

import { Component } from './Text.styled';
import type { ITextProps } from './Text.types';

export const Text = forwardRef<HTMLParagraphElement, ITextProps>((props, ref) => {
	const { children, size, color, padding, fontWeight, className, ...rest } = props;

	const theme = { size, color, padding, fontWeight };

	const classNames = cx(className);

	return (
		<Component ref={ref} className={classNames} theme={theme} {...rest}>
			{children}
		</Component>
	);
});

Text.displayName = 'Text';

Text.defaultProps = {
	size: 16,
	color: 'dark',
	padding: '5px 0',
	fontWeight: 'normal',
};
