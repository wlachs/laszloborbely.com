import Contact from './Contact.jsx';
import Welcome from './Welcome.jsx';

export interface IRoute {
    id: number;
    display: boolean;
    name: string;
    path: string;
    View: () => JSX.Element;
}

export const routes: IRoute[] = [
    {
        id: 0,
        display: true,
        name: 'Contact',
        path: '/contact',
        View: Contact,
    },
    {
        id: 2,
        display: false,
        name: 'Welcome',
        path: '/',
        View: Welcome,
    }
];