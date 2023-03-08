import {Link} from "react-router-dom"

export function Navigation(){
    return (
        <nav className="fixed top-10 right-0 left-0 h-[75px] flex justify-center px-5 bg-white-300/50 items-center text-black">
            <span className=" font-sans text-lg">
                <Link to="/products" className="mx-12" > PRODUCTS </Link>   
                <Link to="/contacts" className="mx-12"> CONTACTS </Link>   
                <Link to="/gallery" className="mx-12"> GALLERY </Link>   
            </span>
        </nav>
    )
}