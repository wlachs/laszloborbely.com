import './index.css';

import { type ReactNode } from 'react';

// Assets
import logo from '../../assets/images/logo.svg';
import { Links } from '../Links';
import { PureLinkHighlight } from '../PureLinkHighlight';
import { Separator } from '../Separator';

export function Navbar() {
	return (
		<CommonNavbar>
			<div className='d-flex flex-row-reverse align-items-center gap-3'>
				<Links />
			</div>
		</CommonNavbar>
	);
}

function CommonNavbar(props: { children?: ReactNode }) {
	const { children } = props;

	return (
		<div className='col-11 col-lg-12 m-auto'>
			<div className='w-100 d-flex justify-content-between align-items-center mb-2'>
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
			<Separator />
		</div>
	);
}
