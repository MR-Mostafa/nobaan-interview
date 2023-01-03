import { memo, useEffect, useRef } from 'react';

import cx from 'classnames';
import styled from 'styled-components';

import { Input } from '~src/components';

import type { IStepperInputProps } from './StepperInput.type';

const Wrapper = styled.div`
	position: relative;
	overflow: hidden;
	margin: 1.5rem 0 3rem;
	padding: 0 1rem;
	text-align: left;

	input {
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		position: absolute;
		caret-color: transparent;
		outline: none;
		background: transparent !important;
		color: transparent !important;
		border: none !important;
		box-shadow: none !important;
		opacity: 0;
		z-index: 2;

		&:focus + div {
			.current {
				border-bottom-color: #4250b3;
			}
		}
	}
`;

const Flex = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	gap: 15px;
	max-width: 100%;
	user-select: none;

	p {
		flex: 1 1 auto;
		width: 100%;
		height: 75px;
		text-align: center;
		border-bottom: 4px solid #a7a7a7;
		font-size: 40px;
		margin: 0;
		transition: border-color 0.15s ease-in-out;
		line-height: 1.6;

		&.inactive {
			opacity: 0.5;
		}

		&.active {
			border-color: #048923;
		}
	}
`;

export const StepperInput = memo(({ length, autoFocus, value, setValue, pattern }: IStepperInputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const flexRef = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		if (!inputRef.current) return;

		inputRef.current.focus();
	};

	useEffect(() => {
		if (!inputRef.current || !autoFocus) return;

		inputRef.current.focus();
	}, [autoFocus]);

	return (
		<Wrapper>
			<Input
				value={value}
				ref={inputRef}
				onChange={(e) => {
					const val = e.target.value?.trim();

					if (pattern && !RegExp(pattern, 'gi').test(val)) return;

					if (val.length > length) return;

					setValue(val);
				}}
			/>

			<Flex ref={flexRef} onClick={handleClick}>
				{[...Array(length)].map((_, index) => {
					const val = value[index] || '';
					const classNames = cx({ active: val }, { inactive: !val && value.length !== index }, { current: value.length === index });

					return (
						<p key={index} className={classNames}>
							{val}
						</p>
					);
				})}
			</Flex>
		</Wrapper>
	);
});

StepperInput.displayName = 'StepperInput';
