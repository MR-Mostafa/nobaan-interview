import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Button, Container, Text } from '~src/components';

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 15px;
`;

export const HomePage = () => {
	const navigate = useNavigate();

	const handleNavigate = (to: string) => {
		navigate(to);
	};

	return (
		<Container>
			<Text padding="0 0 10px" size={30} fontWeight="bold">
				Home Page
			</Text>

			<Flex>
				<Button color="primary" radius="rounded" type="button" onClick={() => handleNavigate('/products')}>
					Products
				</Button>
				<Button color="warning" radius="rounded" type="button" onClick={() => handleNavigate('/users')}>
					Users
				</Button>
				<Button color="danger" radius="rounded" type="button" onClick={() => handleNavigate('/verification')}>
					Verification
				</Button>
			</Flex>
		</Container>
	);
};
