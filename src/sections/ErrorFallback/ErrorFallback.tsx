import type { FallbackProps } from 'react-error-boundary';

import { Container, Text } from '~src/components';

export const ErrorFallback = ({ error }: FallbackProps) => {
	return (
		<Container>
			<Text fontWeight="bold" size={20} padding="1rem 0">
				Something went wrong:
			</Text>

			<pre>{error.stack}</pre>
		</Container>
	);
};
