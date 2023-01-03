import { forwardRef } from 'react';

import cx from 'classnames';

import { Component } from './Input.styled';
import type { IInputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
	const { className, hasError, ...rest } = props;

	const theme = { hasError };

	const classNames = cx(className, { hasError });

	return <Component ref={ref} className={classNames} theme={theme} {...rest} />;
});

Input.displayName = 'Input';

Input.defaultProps = {};
