import { lazy } from 'react'
import Layout from '../layout/Layout'

const Home = lazy(() => import("../pages/Home/Home"));
const OverOns = lazy(() => import("../pages/OverOns/OverOns"));
const Tarieven = lazy(() => import("../pages/Tarieven/Tarieven"));
const LesenVanaf = lazy(() => import("../pages/LessenVanaf/LessenVanaf"));
const TheorieExamen = lazy(() => import("../pages/TheorieExamen/TheorieExamen"));
const Eigen = lazy(() => import("../pages/Eigen/Eigen"));
const Rijschool = lazy(() => import("../pages/Rijschool/Rijschool"));
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
    {
        path: "/over-ons",
        component: OverOns,
        auth: false,
        layout: Layout,
    },
    {
        path: "/tarieven",
        component: Tarieven,
        auth: false,
        layout: Layout,
    },
    {
        path: "/lessen-vanaf",
        component: LesenVanaf,
        auth: false,
        layout: Layout,
    },
    {
        path: "/theorie-examen",
        component: TheorieExamen,
        auth: false,
        layout: Layout,
    },
    {
        path: "/eigen-verklaring",
        component: Eigen,
        auth: false,
        layout: Layout,
    },
    {
        path: "/rijschool-machtigen",
        component: Rijschool,
        auth: false,
        layout: Layout,
    },
]

export default routeConfig