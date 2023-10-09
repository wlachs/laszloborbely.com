import {type ReactNode} from 'react';
import './index.css';
import Links from '../Links/index.jsx';
import PureLinkHighlight from '../PureLinkHighlight/index.jsx';

// Assets
import logo from '../../assets/logo.svg';

function Navbar() {
	return (
		<CommonNavbar>
			<div className='d-flex w-100 flex-row-reverse align-items-center'>
				<Links />
			</div>
		</CommonNavbar>
	);
}

function CommonNavbar(props: {
	children?: ReactNode;
}) {
	const {children} = props;

	return (
		<div className='col-12 col-lg-10 px-1 w-100 mb-lg-5 px-5 d-flex justify-content-between align-items-center'>
			<PureLinkHighlight to='/'>
				<img
					src={logo}
					height='40'
					className='navbar-logo'
					alt='László Borbély - Full-Stack Software Engineer'
				/>
			</PureLinkHighlight>
			{children}
		</div>
	);
}

export default Navbar;
