import { createSlice } from '@reduxjs/toolkit';

export const textValueSlice = createSlice({
	name: 'textValue',
	initialState: {
		value: '',
	},
	reducers: {
		updateValue: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { updateValue } = textValueSlice.actions;

export const currentValue = (state: { textValue: { value: string } }): string => {
	return state.textValue.value;
};

export default textValueSlice.reducer;
