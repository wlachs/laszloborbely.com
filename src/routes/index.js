import {Fragment} from 'react';
import Contact from './Contact';
import Projects from './Projects';
import PureButton from '../components/PureButton';
import Welcome from './Welcome';

export const routes = [
    {
        id: 0,
        display: true,
        name: 'Contact',
        nav: PureButton,
        path: '/contact',
        view: Contact,
    },
    {
        id: 1,
        display: true,
        name: 'Projects',
        nav: Fragment,
        path: '/projects',
        view: Projects,
    },
    {
        id: 2,
        display: false,
        name: 'Welcome',
        nav: Fragment,
        path: '/',
        view: Welcome,
    },
];
