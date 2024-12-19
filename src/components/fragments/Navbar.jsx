export default function Navbar(){
    return(
        <>
            <div>
                <nav className="bg-gray-800 p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <a href="/" className="text-white text-2xl font-bold">FTL</a>
                        <ul className="flex">
                            <li className="mx-2"><a href="/" className="text-white">Home</a></li>
                            <li className="mx-2"><a href="/about" className="text-white">About</a></li>
                            <li className="mx-2"><a href="/contact" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}