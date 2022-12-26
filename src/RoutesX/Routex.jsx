import { useRoutes } from "react-router"
import { Posts } from "../Posts"
export const RoutesX = () => {
    const routes = [
        {
            path: "/",
            element: <Posts/>
        }
    ]   
    let element = useRoutes(routes)
    return element
}