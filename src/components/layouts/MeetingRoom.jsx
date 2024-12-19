import Booking from "../fragments/Booking.jsx";
import ListRoom from "../fragments/ListRoom.jsx";
import Sidebar from "../fragments/Sidebar.jsx";

export default function MeetingRoom({name}){
    return(
        <div className="flex flex-row gap-5 bg-gray-100">
            <Sidebar/>
            <div className="flex flex-col mx-10">
                <Booking/>
                <ListRoom/>
            </div>

        </div>

    )
}