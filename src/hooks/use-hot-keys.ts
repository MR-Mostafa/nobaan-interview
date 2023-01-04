import { useEffect } from 'react';

import type { HotkeyItemOptions } from './parse-hotkey';
import { getHotkeyHandler, getHotkeyMatcher } from './parse-hotkey';

export type { HotkeyItemOptions };
export { getHotkeyHandler };

export type HotkeyItem = [string, (event: KeyboardEvent) => void, HotkeyItemOptions?];

function shouldFireEvent(event: KeyboardEvent, tagsToIgnore: string[]) {
	if (event.target instanceof HTMLElement) {
		return !event.target.isContentEditable && !tagsToIgnore.includes(event.target.tagName);
	}

	return true;
}

/**
 * @description
 *  Listen for keys combinations on document element
 *
 * @param hotkeys - hotkey string e.g. ctrl+E, shift+alt+L, mod+S
 * @param tagsToIgnore -  HTML tag names that hotkeys will not trigger on
 *
 * {@see https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-hotkeys/use-hotkeys.ts}
 * {@see https://mantine.dev/hooks/use-hotkeys/}
 */
export function useHotkeys(hotkeys: HotkeyItem[], tagsToIgnore: string[] = ['INPUT', 'TEXTAREA', 'SELECT']) {
	useEffect(() => {
		const keydownListener = (event: KeyboardEvent) => {
			hotkeys.forEach(([hotkey, handler, options = { preventDefault: true }]) => {
				if (getHotkeyMatcher(hotkey)(event) && shouldFireEvent(event, tagsToIgnore)) {
					if (options.preventDefault) {
						event.preventDefault();
					}

					handler(event);
				}
			});
		};

		document.documentElement.addEventListener('keydown', keydownListener);
		return () => document.documentElement.removeEventListener('keydown', keydownListener);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hotkeys]);
}
