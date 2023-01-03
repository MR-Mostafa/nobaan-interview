import { useNavigate } from 'react-router-dom';

import { Button, Container, Text } from '~src/components';

export const NotFound = () => {
	const navigate = useNavigate();

	const handleNavigate = (to: string) => {
		navigate(to);
	};

	return (
		<Container>
			<Text padding="0 0 10px" size={200} fontWeight="bold" css={{ textAlign: 'center' }}>
				404
			</Text>

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
