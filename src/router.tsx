import { ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

export function Router(): ReactElement {
	const router = createBrowserRouter(routes);

	return (
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	);
}
