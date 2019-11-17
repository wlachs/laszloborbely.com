import Contact from './Contact';
import Projects from './Projects';
import PureButton from '../components/PureButton';
import Welcome from './Welcome';

export const routes = [
    {
        display: true,
        name: 'Contact',
        nav: PureButton,
        path: '/contact',
        view: Contact,
    },
    {
        display: true,
        name: 'Projects',
        nav: null,
        path: '/projects',
        view: Projects,
    },
    {
        display: false,
        name: 'Welcome',
        nav: null,
        path: '/',
        view: Welcome,
    },
];
