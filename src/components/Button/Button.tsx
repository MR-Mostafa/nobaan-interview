import { forwardRef } from 'react';

import cx from 'classnames';

import { Component } from './Button.styled';
import type { IButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
	const { className, type, color, radius, children, ...rest } = props;

	const theme = { color, radius };

	const classNames = cx(className);

	return (
		<Component ref={ref} type={type} className={classNames} theme={theme} {...rest}>
			{props.children}
		</Component>
	);
});

Button.displayName = 'Button';

Button.defaultProps = {
	type: 'button',
	disabled: false,
};
