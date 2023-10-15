import {type ReactNode} from 'react';
import Navbar from '../Navbar/index.jsx';
import './index.css';

function Frame(props: {children?: ReactNode}) {
	const {children} = props;
	return (
		<div className='frame-container col-12 m-0 p-0 min-vh-100 py-lg-4 d-flex flex-column'>
			<Navbar/>
			{children}
		</div>
	);
}

export default Frame;
