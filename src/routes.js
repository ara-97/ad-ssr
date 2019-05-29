import HomePage from "./components/HomePage";
import About from "./components/About";

export default [
    {
        path: "/",
        component: HomePage,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: true,
    }
];
