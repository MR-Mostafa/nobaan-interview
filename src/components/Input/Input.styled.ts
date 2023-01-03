import styled, { CSSObject } from 'styled-components';

import { globalColors } from '~src/constants';

import { IInputProps } from './Input.types';

export const Component = styled('input')<IInputProps>`
	font-size: 15px;
	font-weight: normal;
	line-height: 1.6;
	color: ${globalColors.dark};
	border: 1px solid #bcbcbc;
	border-radius: 4px;
	outline: none;
	padding: 5px 7px 6px;
	appearance: none;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	font-family: inherit;
	background-color: #fff;

	&:focus {
		box-shadow: 0 0 3px 3px #00000029;
		border-color: #a7a7a7;
	}

	&:read-only,
	&:disabled {
		background-color: #e9ecef;
		opacity: 1;
		user-select: none;
		cursor: not-allowed;
	}

	&.has-error {
		border-color: ${globalColors.danger};
		color: ${globalColors.danger};

		&:focus {
			box-shadow: 0 0 3px 3px #dc354566;
		}
	}
`;
