import {NavLink} from 'react-router-dom';
import {ReactNode} from "react";

function PureLinkHighlight(props: {
    to: string;
    children?: ReactNode;
}) {
    const {to, children} = props;
    return (
        <NavLink to={to} className={({isActive}) => isActive ? "link link_active" : "link"}>
            {children}
        </NavLink>
    );
}

export default PureLinkHighlight;
