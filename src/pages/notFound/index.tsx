import { Container, Text } from '~src/components';

export const NotFound = () => {
	return (
		<Container>
			<Text padding="0 0 10px" size={200} fontWeight="bold" css={{ textAlign: 'center' }}>
				404
			</Text>
		</Container>
	);
};
