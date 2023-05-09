import {NavLink} from 'react-router-dom';

function PureLink(props: {
	to: string;
	children?: JSX.Element | string;
}) {
	const {to, children} = props;
	return (
		<NavLink to={to} className='link'>
			{children}
		</NavLink>
	);
}

export default PureLink;
