import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Button, Container, Input, StepperInput, Text } from '~src/components';

const Wrapper = styled.div`
	max-width: 100%;
	width: 600px;
	margin: 1.5rem auto 3rem;
	border: 1px solid #f1f1f1;
	box-shadow: 0 0 2px 0 #00000029;
	padding: 1.25rem;
	border-radius: 4px;
	text-align: right;
`;

const Flex = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	gap: 15px;
	padding-bottom: 0.5rem;
`;

export const VerificationPage = () => {
	const [value, setValue] = useState<string>('');
	const navigate = useNavigate();

	const handleNavigate = (to: string) => {
		navigate(to);
	};

	const handleClearValue = () => {
		setValue('');
	};

	return (
		<Container>
			<Text padding="0 0 10px" size={30} fontWeight="bold">
				Verification Page
			</Text>

			<Wrapper>
				<Text padding="0 0 10px" size={22} fontWeight="bold" css={{ color: '#3d3d3d', textAlign: 'left' }}>
					Enter your 4 digits verification code
				</Text>

				<StepperInput
					length={5}
					value={value}
					autoFocus
					pattern="^[0-9]*$"
					setValue={(newValue) => {
						setValue(newValue);
					}}
				/>

				<Flex>
					<Button color="primary" radius="rounded" type="button" css={{ paddingLeft: '15px', paddingRight: '15px' }}>
						VERIFY CODE
					</Button>

					<Button color="danger" radius="rounded" type="button" onClick={handleClearValue}>
						CLEAR
					</Button>
				</Flex>

				<Button
					css={{ backgroundColor: 'transparent', color: '#007bff', border: 'none', height: 'auto', boxShadow: 'none', padding: '0' }}
				>
					correct phone number
				</Button>
			</Wrapper>

			<Button
				color="success"
				radius="rounded"
				type="button"
				onClick={() => handleNavigate('/')}
				css={{ paddingLeft: '15px', paddingRight: '15px' }}
			>
				Go Back To Home
			</Button>
		</Container>
	);
};
