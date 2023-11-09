import Home from "../pages/Home";
import TheDeveloper from "../pages/TheDeveloper";
import TheApp from "../pages/TheApp";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home",
        protected: false
    },
    {
        path: "/thedeveloper",
        component: TheDeveloper,
        name: "The Developer",
        protected: false
    },
    {
        path: "/theapp",
        component: TheApp,
        name: "The App",
        protected: false
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        protected: true
    },
    {
        path: "/contact",
        component: Contact,
        name: "Contact",
        protected: false
    }
]

export default routes