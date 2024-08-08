import { ReactElement, type ReactNode } from 'react';

import logo from '../../assets/images/logo.svg';
import { Links } from '../Links';
import { PureLinkHighlight } from '../PureLinkHighlight';
import { Separator } from '../Separator';

export function Navbar(): ReactElement {
	return (
		<CommonNavbar>
			<div className='flex flex-row-reverse items-center gap-3'>
				<Links />
			</div>
		</CommonNavbar>
	);
}

interface CommonNavbarProps {
	children?: ReactNode;
}

function CommonNavbar({ children }: CommonNavbarProps): ReactElement {
	return (
		<>
			<div className='flex items-center justify-between py-4'>
				<PureLinkHighlight to='/blog'>
					<img src={logo} className='w-12' alt='László Borbély - Full-Stack Software Engineer' />
				</PureLinkHighlight>
				{children}
			</div>
			<Separator />
		</>
	);
}
