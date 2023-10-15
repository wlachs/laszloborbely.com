import {type ReactNode} from 'react';

// Assets
import logo from '../../assets/logo.svg';
import Links from '../Links/index.jsx';
import PureLinkHighlight from '../PureLinkHighlight/index.jsx';
import './index.css';

function Navbar() {
	return (
		<CommonNavbar>
			<div className='d-flex w-100 flex-row-reverse align-items-center'>
				<Links/>
			</div>
		</CommonNavbar>
	);
}

function CommonNavbar(props: {
	children?: ReactNode;
}) {
	const {children} = props;

	return (
		<div className='col-12 col-lg-10 px-1 px-lg-5 w-100 mb-5 mb-lg-5 d-flex justify-content-between align-items-center'>
			<PureLinkHighlight to='/blog'>
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
