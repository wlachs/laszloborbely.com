import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {routes} from './routes';

function Router() {
	const router = createBrowserRouter(routes);

	return (
		<HelmetProvider>
			<RouterProvider router={router}/>
		</HelmetProvider>
	);
}

export default Router;
