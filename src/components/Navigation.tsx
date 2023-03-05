import {Link} from "react-router-dom"

export function Navigation(){
    return (
        <nav className="fixed top-0 right-0 left-0 h-[50px] flex justify-between px-5 bg-yellow-300 items-center text-black">
            <span className="font-bold">
                Geras project
            </span>
            <span>
                <Link to="/" className="mr-2"> Products </Link>   
                <Link to="/about"> About </Link>   
            </span>
        </nav>
    )
}