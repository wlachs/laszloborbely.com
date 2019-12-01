import Contact from './Contact';
import Projects from './Projects';
import PureButton from '../components/PureButton';
import PureLink from "../components/PureLink";
import Welcome from './Welcome';

export const routes = [
    {
        id: 0,
        display: true,
        name: 'Contact',
        Nav: PureButton,
        path: '/contact',
        View: Contact,
    },
    {
        id: 1,
        display: true,
        name: 'Projects',
        Nav: PureLink,
        path: '/projects',
        View: Projects,
    },
    {
        id: 2,
        display: false,
        name: 'Welcome',
        Nav: PureLink,
        path: '/',
        View: Welcome,
    },
];
