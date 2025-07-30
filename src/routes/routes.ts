import { lazy } from 'react'
import Layout from '../layout/Layout'

const Home = lazy(() => import("../pages/Home/Home"));
const OverOns = lazy(() => import("../pages/OverOns/OverOns"));
const Tarieven = lazy(() => import("../pages/Tarieven/Tarieven"));
const LesenVanaf = lazy(() => import("../pages/LessenVanaf/LessenVanaf"));
const TheorieExamen = lazy(() => import("../pages/TheorieExamen/TheorieExamen"));
const Eigen = lazy(() => import("../pages/Eigen/Eigen"));
const Rijschool = lazy(() => import("../pages/Rijschool/Rijschool"));
const Praktijkexamen = lazy(() => import("../pages/Praktijkexamen/Praktijkexamen"));
const Wist = lazy(() => import("../pages/Wist/Wist"));
const Informatie = lazy(() => import("../pages/Informatie/Informatie"));
const Veelgestelde = lazy(() => import("../pages/Veelgestelde/Veelgestelde"));
const Beekbergen = lazy(() => import("../pages/Beekbergen/Beekbergen"));
const Hoenderloo = lazy(() => import("../pages/Hoenderloo/Hoenderloo"));
const Teuge = lazy(() => import("../pages/Teuge/Teuge"));
const Twello = lazy(() => import("../pages/Twello/Twello"));
const Vaassen = lazy(() => import("../pages/Vaassen/Vaassen"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Autorijles = lazy(() => import("../pages/Autorijles/Autorijles"));
const Motorrijles = lazy(() => import("../pages/Motorrijles/Motorrijles"));
const Theoriecursus = lazy(() => import("../pages/Theoriecursus/Theoriecursus"));
const SpoedCursus = lazy(() => import("../pages/SpoedCursus/SpoedCursus"));
const Opfriscursus = lazy(() => import("../pages/Opfriscursus/Opfriscursus"));


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
    {
        path: "/praktijkexamen-afleggen",
        component: Praktijkexamen,
        auth: false,
        layout: Layout,
    },
    {
        path: "/wist-jij-dat",
        component: Wist,
        auth: false,
        layout: Layout,
    },
    {
        path: "/informatie-voor-ouders",
        component: Informatie,
        auth: false,
        layout: Layout,
    },
    {
        path: "/veelgestelde-vragen",
        component: Veelgestelde,
        auth: false,
        layout: Layout,
    },
    {
        path: "/rijschool-beekbergen",
        component: Beekbergen,
        auth: false,
        layout: Layout,
    },
    {
        path: "/rijschool-hoenderloo",
        component: Hoenderloo,
        auth: false,
        layout: Layout,
    },
    {
        path: "/rijschool-teuge",
        component: Teuge,
        auth: false,
        layout: Layout,
    },
    {
        path: "/rijschool-twello",
        component: Twello,
        auth: false,
        layout: Layout,
    },
    {
        path: "/rijschool-vaassen",
        component: Vaassen,
        auth: false,
        layout: Layout,
    },
    {
        path: "/contact",
        component: Contact,
        auth: false,
        layout: Layout,
    },
    {
        path: "/autorijschool-nijmengen",
        component: Autorijles,
        auth: false,
        layout: Layout,
    },
    {
        path: "/motorrijles-apeldoorn",
        component: Motorrijles,
        auth: false,
        layout: Layout,
    },
    {
        path: "/theoriecursus",
        component: Theoriecursus,
        auth: false,
        layout: Layout,
    },
    {
        path: "/spoedcursus",
        component: SpoedCursus,
        auth: false,
        layout: Layout,
    },
    {
        path: "/opfriscursus",
        component: Opfriscursus,
        auth: false,
        layout: Layout,
    },
]

export default routeConfig