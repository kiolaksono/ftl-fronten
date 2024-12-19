import { createBrowserRouter } from "react-router-dom";
import MeetingRoom from "../components/layouts/MeetingRoom";
import OrderRoom from "../components/layouts/OrderRoom.jsx";

export const router = createBrowserRouter([
    {
        path:"/",
        element : <MeetingRoom/>
    },
    {
        path:"/roomorder",
        element: <OrderRoom/>
    }
])