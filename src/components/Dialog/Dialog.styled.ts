import styled from 'styled-components';

import type { IDialogProps } from './Dialog.types';

export const Component = styled('div')<IDialogProps>`
	background-color: #fff;
	padding: 0 0.5rem 0.75rem;
	box-shadow: 0 0 3px 3px #00000029;
	border: 1px solid #bcbcbc;
	border-radius: 7px;

	.header {
		padding: 0.75rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 1px solid #dee2e6;
		justify-content: space-between;
		margin-bottom: 0.25rem;

		button {
			padding: 0;
			min-width: auto;
			width: 32px;
			height: 32px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: auto;
		}
	}

	.body {
		padding: 1rem 0.75rem;
	}
`;
