import { Navigate, useRoutes } from "react-router-dom"
import { Mainlayout } from "../layoutes"
import { Favorites, Home } from "../pages"

const Routes =()=> {
    return useRoutes([
        {
            element:<Mainlayout />,
            children:[
                {path:"home", element:<Home />},
                {path:"favorites", element:<Favorites />},
                {path:"*", element:<Navigate to="home" />}
            ]
        }
    ])
}
export default Routes;