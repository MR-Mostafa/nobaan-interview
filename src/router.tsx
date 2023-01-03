import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '~pages/home';
import { NotFound } from '~pages/notFound';
import { ProductsPage } from '~pages/products';
import { UsersPage } from '~pages/users';
import { VerificationPage } from '~pages/verification';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/products',
		element: <ProductsPage />,
	},
	{
		path: '/users',
		element: <UsersPage />,
	},
	{
		path: '/verification',
		element: <VerificationPage />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
