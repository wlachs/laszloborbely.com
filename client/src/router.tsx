import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Frame from './components/Frame';
import {type RouteProps, routes} from './routes';
import {HelmetProvider} from 'react-helmet-async';

function Router() {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<Frame>
					<Routes>
						{routes.map((R: RouteProps) => (
							<Route key={R.id} path={R.path} element={<R.View/>}/>
						))}
					</Routes>
				</Frame>
			</BrowserRouter>
		</HelmetProvider>
	);
}

export default Router;
