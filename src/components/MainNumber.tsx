import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

export function MainNumber(){

    const whatsappLink = 'https://wa.me/972533215725';

    return (
        <nav className="fixed top-0 right-0 left-0 h-[50px] flex border-b-2 border-gray-200 justify-center bg-white-300/50 items-center">
            <div className="flex items-center">
                <p className="font-sans text-lg mr-2">Haifa:</p>
                <p className="text-cyan-500 text-lg md:text-lg font-sans">+972 53 321-57-25</p>  
                <Link to={whatsappLink} className="ml-2 text-green-600"><FaWhatsapp size={26} /></Link>  
            </div>
        </nav>
    )
}