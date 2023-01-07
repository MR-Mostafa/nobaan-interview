import { forwardRef } from 'react';
import { IoClose } from 'react-icons/io5';

import cx from 'classnames';

import { Button, Text } from '~src/components';

import { Component } from './Dialog.styled';
import type { IDialogProps } from './Dialog.types';

export const Dialog = forwardRef<HTMLDivElement, IDialogProps>((props, ref) => {
	const { className, children, title, onClose, ...rest } = props;

	const theme = {};

	const classNames = cx(className, 'dialog');

	return (
		<Component ref={ref} className={classNames} theme={theme} {...rest}>
			{title || onClose ? (
				<header className="header">
					{title ? (
						<Text fontWeight="bold" size={22} padding="0 2rem 0 0">
							{title}
						</Text>
					) : null}

					{onClose ? (
						<Button color="danger" radius="rounded" onClick={onClose}>
							<IoClose size={27} />
						</Button>
					) : null}
				</header>
			) : null}

			<div className="body">{children}</div>
		</Component>
	);
});
