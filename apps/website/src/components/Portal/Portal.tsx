import type { ReactPortal } from 'react';
import { memo, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Wrapper } from './Portal.styled';
import type { IPortalProps } from './Portal.types';

export const Portal = memo((props: IPortalProps): ReactPortal => {
	const { children, className, bodyClassName, styles, withBackdrop, isOpen } = props;

	const element = useMemo<HTMLDivElement>(() => {
		return document.createElement('div');
	}, []);

	useEffect(() => {
		if (!isOpen) return;

		if (className) {
			element.classList.add(...className.split(' '));
		}

		if (bodyClassName) {
			document.body.classList.add(...bodyClassName.split(' '));
		}

		document.body.appendChild(element);

		return () => {
			if (bodyClassName) {
				document.body.classList.remove(...bodyClassName.split(' '));
			}

			if (className) {
				element.classList.remove(...className.split(' '));
			}

			document.body.removeChild(element);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [className, isOpen]);

	if (!isOpen) return null as any;

	return createPortal(
		<>
			<Wrapper theme={{ withBackdrop }} css={styles}>
				{children}
			</Wrapper>
			{withBackdrop ? <Backdrop className="back-drop" /> : null}
		</>,
		element,
	);
});

Portal.displayName = 'Portal';
