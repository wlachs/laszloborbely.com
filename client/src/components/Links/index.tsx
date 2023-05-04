import PureLinkHighlight from '../PureLinkHighlight/index.jsx';
import {IRoute, routes} from "../../routes";

function Links() {
    const elements = routes
        .filter((route: IRoute) => route.display)
        .map((Route: IRoute) => (
            <PureLinkHighlight key={Route.id} to={Route.path}>{Route.name}</PureLinkHighlight>
        ));

    return (
        <>
            {elements}
        </>
    );
}

export default Links;
