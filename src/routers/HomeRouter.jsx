import { HomeLayout } from "../Layouts";
import { DeadBodyBag, Donation, EmergencyContacts, FreeChargePhoneBattery, FreeRestaurant, Home, News, NewsDetail, CreateNews } from "../Page";
import UsefulApp from "../Page/UsefulApp";

const HomeRouter = [
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: "",
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
            },
            {
                path: "deadbody-bag",
                element: <DeadBodyBag/>
            },
            {
                path: "useful-apps",
                element: <UsefulApp/>
            },
            {
                path: "news",
                element:<News/>
            },
            {
                path: "news/:id",
                element:<NewsDetail/>
            },
            {
                path: "news/create",
                element:<CreateNews/>
            }
        ]
    }
]

export default HomeRouter;