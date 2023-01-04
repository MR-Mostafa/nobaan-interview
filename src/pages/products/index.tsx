import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Container, Text } from '~src/components';
import { currentValue } from '~src/store/slice/textValue';

const ProductsPage = () => {
	const navigate = useNavigate();

	const textValue = useSelector(currentValue);

	const handleNavigate = (to: string) => {
		navigate(to);
	};

	return (
		<Container>
			<Text padding="0 0 10px" size={30} fontWeight="bold">
				Products Page
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

			<Text size={18} fontWeight="bold" padding="0 0 0.25rem" css={{ display: 'block', marginTop: '15px' }}>
				Your Text Field : {textValue}
			</Text>
		</Container>
	);
};

export default ProductsPage;
