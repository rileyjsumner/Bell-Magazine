import About from './components/About';
import Contact from './components/Contact';
import DesignKit from './components/DesignKit';
import Home from './components/Home'

const routes = [
    { path: '/', component: { Home }, name: 'Root' },
    { path: '/Home', component: { Home }, name: 'Home' },
    { path: '/Design', component: { DesignKit }, name: 'Design' },
    { path: '/About', component: { About }, name: 'About'},
    { path: '/Contact', component: { Contact }, name: 'Contact'}
];

export default routes;