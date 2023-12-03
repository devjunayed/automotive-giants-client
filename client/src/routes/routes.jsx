import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Root from '../components/Root/Root';
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Brand from "../components/Brand/Brand";
import Details from "../components/Details/Details";
import Update from "../components/Update/Update";
import Cart from "../components/Cart/Cart";
import ErrorPage from "../components/ErrorPage/ErrorPage";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/add_product",
                element: <PrivateRoutes>
                    <AddProduct></AddProduct>
                </PrivateRoutes>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/brand/:id',
                element: <Brand></Brand>,
                loader: ({ params }) => fetch(`https://automotive-giants-szycu79ub-devjunayeds-projects.vercel.app/brand/${params.id}`)
            },
            {
                path: '/brand/:brandName/:id',
                element: <PrivateRoutes>
                    <Details></Details>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://automotive-giants-szycu79ub-devjunayeds-projects.vercel.app/${params.brandName}/${params.id}`)
            },
            {
                path: '/brand/:brandName/update/:id',
                element: <PrivateRoutes>
                    <Update></Update>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://automotive-giants-szycu79ub-devjunayeds-projects.vercel.app/${params.brandName}/${params.id}`)
            },
            {
                path: '/cart/:id',
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
                loader: ({params})=> fetch(`https://automotive-giants-szycu79ub-devjunayeds-projects.vercel.app/cart/${params.id}`)


            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ],
    },

])

export default routes;