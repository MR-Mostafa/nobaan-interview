import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import '~assets/styles/global.scss';
import { ErrorFallback } from '~src/sections';
import { store } from '~src/store';

import router from './router';

const App = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ErrorBoundary>
	);
};

export default App;
