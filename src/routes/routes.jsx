import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Chefs from "../components/Chefs/Chefs";
import Recipes from "../components/Recipes/Recipes";
import RecipesDetails from "../components/RecipesDetails/RecipesDetails";
import Error from "../components/Error/Error";
import Blog from "../components/Blog/Blog";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/recipes/:id',
                element: <Recipes></Recipes>,
                loader: ({ params }) => fetch(` https://cook-with-us-server-golam-kibriya123.vercel.app/chef/${params.id}`)

            },
            {
                path: '/recipesDetails/:r_id',
                element: <RecipesDetails></RecipesDetails>,
                loader: ({ params }) => fetch(` https://cook-with-us-server-golam-kibriya123.vercel.app/recipe/${params.r_id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <Error></Error>

            }
        ]
    }
])
export default router;