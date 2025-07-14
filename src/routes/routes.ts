import  { lazy } from 'react'
import Layout from '../layout/Layout'

const Home = lazy(() => import("../pages/Home/Home"));
// const Home = lazy(() => import(""));
// const Home = lazy(() => import(""));
// const Home = lazy(() => import(""));
// const Home = lazy(() => import(""));
// const Home = lazy(() => import(""));
// const Home = lazy(() => import(""));
// const Home = lazy(() => import(""));
// const Home = lazy(() => import(""));
// const Home = lazy(() => import(""));

const routeConfig = [
    {
        path: "/",
        component: Home,
        auth: false,
        layout: Layout,
    },
    // {
    //     path: "/over-ons",
    //     component: OverOns,
    //     auth: false,
    //     layout: Layout,
    // },
]

export default routeConfig