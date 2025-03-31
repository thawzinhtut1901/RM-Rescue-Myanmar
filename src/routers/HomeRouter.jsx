import { Navigate } from "react-router";
import { HomeLayout } from "../Layouts";
import { EmergencyContacts, FreeRestaurant, Home } from "../Page";

const HomeRouter = [
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={"home"}/>
            },
            {
                path: "home",
                element: <Home/>
            },
            {
                path: "emergency-contacts",
                element: <EmergencyContacts/>
            }, 
            {
                path: "free-restaurant",
                element: <FreeRestaurant/>
            }
        ]
    }
]

export default HomeRouter;