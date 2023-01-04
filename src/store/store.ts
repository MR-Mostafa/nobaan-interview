import { configureStore } from '@reduxjs/toolkit';

import textValueReducer from '~src/store/slice/textValue';

export const store = configureStore({
	reducer: {
		textValue: textValueReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
