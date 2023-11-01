import { useRoutes } from "react-router-dom"
import { Mainlayout } from "../layoutes"
import { Home } from "../pages"

const Routes =()=> {
     const routes = useRoutes([
        {
            element:<Mainlayout />,
            children:[
                {path:"home", element:<Home />}
            ]
        }
    ])
    return routes;
}
export default Routes;