import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

export function Router() {
	const router = createBrowserRouter(routes);

	return (
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	);
}
