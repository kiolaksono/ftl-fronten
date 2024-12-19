import Button from "../ui/Button.jsx";

export default function Booking(){
    return (
        <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap justify-between items-left w-60">
                <div className="flex">
                    <Button name="<"/>
                </div>
                <div>
                    <div className="items-start">
                        <h1 className="h-30 decoration-8 text-2xl">Ruang Meeting</h1>
                        <p className="text-sm">Ruang Meeting</p>
                    </div>
                </div>

            </div>
            <Button name="+ Pesan Ruangan"/>
        </div>
    )
}