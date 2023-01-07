import { lazy as ReactLazy, Suspense as ReactSuspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import NotFound from '~pages/notFound';
import { Container, Loading } from '~src/components';

const HomePage = ReactLazy(() => import('~pages/home'));
const ProductsPage = ReactLazy(() => import('~pages/products'));
const UsersPage = ReactLazy(() => import('~pages/users'));
const VerificationPage = ReactLazy(() => import('~pages/verification'));

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ReactSuspense
				fallback={
					<Container>
						<Loading color="danger" isCenter padding="1.5rem 0" />
					</Container>
				}
			>
				<HomePage />
			</ReactSuspense>
		),
	},
	{
		path: '/products',
		element: (
			<ReactSuspense
				fallback={
					<Container>
						<Loading color="danger" isCenter padding="1.5rem 0" />
					</Container>
				}
			>
				<ProductsPage />
			</ReactSuspense>
		),
	},
	{
		path: '/users',
		element: (
			<ReactSuspense
				fallback={
					<Container>
						<Loading color="danger" isCenter padding="1.5rem 0" />
					</Container>
				}
			>
				<UsersPage />
			</ReactSuspense>
		),
	},
	{
		path: '/verification',
		element: (
			<ReactSuspense
				fallback={
					<Container>
						<Loading color="danger" isCenter padding="1.5rem 0" />
					</Container>
				}
			>
				<VerificationPage />
			</ReactSuspense>
		),
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
