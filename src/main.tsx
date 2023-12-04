import {QueryClientProvider} from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/global.css';
import queryClient from './network';
import Router from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router/>
		</QueryClientProvider>
	</React.StrictMode>,
);
