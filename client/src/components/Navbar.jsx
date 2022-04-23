import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

//import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.8] flex-initial justify-center items-center">
                <h1 className="text-white text-2xl border-b-2 border-indigo-300 w-24">CONTRA</h1>
            </div>
        </nav>
    );
}
export default Navbar;
