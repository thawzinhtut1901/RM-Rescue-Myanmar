import { Navigate } from "react-router";
import { HomeLayout } from "../Layouts";
import { Donation, EmergencyContacts, FreeChargePhoneBattery, FreeRestaurant, Home } from "../Page";

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
            },
            {
                path: "free-charge-phone-battery",
                element: <FreeChargePhoneBattery/>
            },
            {
                path: "donation",
                element:<Donation/>
            }
        ]
    }
]

export default HomeRouter;