import { useEffect, useRef } from 'react';

const DEFAULT_EVENTS = ['mousedown', 'touchstart'];

/** */
/**
 * @description
 * Detect click and touch events outside of specified element
 *
 * @param handler - function that will be called on outside click
 * @param events - optional list of events that indicate outside click
 * @param nodes - optional list of nodes that should not trigger outside click event
 *
 * {@link https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-click-outside/use-click-outside.ts}
 * {@link https://mantine.dev/hooks/use-click-outside/}
 */
export function useClickOutside<T extends HTMLElement = any>(
	handler: () => void,
	events?: string[] | null,
	nodes?: (HTMLElement | null)[],
) {
	const ref = useRef<T>();

	useEffect(() => {
		const listener = (event: any) => {
			const { target } = event ?? {};

			if (Array.isArray(nodes)) {
				const shouldIgnore =
					target?.hasAttribute('data-ignore-outside-clicks') || (!document.body.contains(target) && target.tagName !== 'HTML');
				const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));

				if (shouldTrigger && !shouldIgnore) {
					handler();
				}
			} else if (ref.current && !ref.current.contains(target)) {
				handler();
			}
		};

		(events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));

		return () => {
			(events || DEFAULT_EVENTS).forEach((fn) => document.removeEventListener(fn, listener));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref, handler, nodes]);

	return ref;
}
