import Index from "./components/Index";
import About from "./components/About";

export default [
    {
        path: "/",
        component: Index,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: true,
    }
];
