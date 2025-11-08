import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Fleet from './pages/Fleet';
import Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Services": Services,
    "About": About,
    "Contact": Contact,
    "Fleet": Fleet,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: Layout,
};