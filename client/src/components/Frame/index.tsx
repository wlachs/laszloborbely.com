import {type ReactNode} from 'react';
import './index.css';
import Navbar from '../Navbar/index.jsx';

function Frame(props: {children?: ReactNode}) {
	const {children} = props;
	return (
		<div className='frame-container col-12 m-0 p-0 min-vh-100 py-4 d-flex flex-column'>
			<Navbar/>
			{children}
		</div>
	);
}

export default Frame;
