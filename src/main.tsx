import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import '~assets/styles/global.scss';
import { ErrorFallback } from '~src/sections';
import { store } from '~src/store';

import router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ErrorBoundary>
	</React.StrictMode>,
);
