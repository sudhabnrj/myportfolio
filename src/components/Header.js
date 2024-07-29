import React, {useState} from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../utils/ThemeContext';
import { Link } from 'react-router-dom';
import sudhaLogo from '../assets/images/sudhaLogo.png';
import sudhaLogoDark from '../assets/images/sudhaLogoDark.png';
import LoadingImg from './LoadingImg';


const Header = () => {

    const {isDarkMode, toggleMode} = useTheme();
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleNavMenu = () => {
        setToggleMenu(!toggleMenu);
        //console.log('clicked');
    }
    const closeMenu = () => {
        setToggleMenu(false);
    }

    return(
        <header className={`flex flex-col w-full bg-stone-200 dark:bg-slate-700 py-3 ${toggleMenu ? 'opened' : ''}`}>
            <div className="container mx-auto px-4 lg:px-0">
                <nav className="flex justify-between items-center">
                    <Link to="/" className="logo text-5xl dark:text-yellow-300 text-yellow-500 capitalize">
                        {isDarkMode ? <LoadingImg src={sudhaLogoDark} alt="Logo" className='w-60' /> : <LoadingImg src={sudhaLogo} alt="Logo" className='w-60' />}
                        
                    </Link>
                    <div className="flex justify-end items-center">
                        <ul className={`flex lg:left-0 flex-col lg:flex-row justify-start lg:justify-end lg:items-center gap-y-3 gap-x-8 fixed lg:relative  w-[250px] lg:w-auto h-full lg:h-auto z-40 lg:z-auto bg-stone-200 dark:bg-slate-900 dark:lg:bg-transparent lg:bg-transparent top-0 bottom-0 lg:top-auto lg:bottom-auto text-left p-5 lg:p-0 transition-all ${toggleMenu ? 'left-0' : 'left-[-250px]'} `}>
                            <li>
                                <Link to="/" className="dark:text-white text-slate-900 text-xl" 
                                onClick={closeMenu}>Home</Link> 
                            </li>
                            <li>
                                <Link to="/about" className="dark:text-white text-slate-900 text-xl" onClick={closeMenu}>About me</Link> 
                            </li>
                            <li>
                                <Link to="/project" className="dark:text-white text-slate-900 text-xl" onClick={closeMenu}>Projects</Link> 
                            </li>
                            <li>
                                <Link to="/work" className="dark:text-white text-slate-900 text-xl" onClick={closeMenu}>Work</Link> 
                            </li>
                        </ul>
                        <ul className="flex flex-row justify-end items-center gap-y-3 gap-x-5 ml-6">
                            <li>
                                <button type="button" onClick={toggleMode}>
                                    {isDarkMode ? <LightModeIcon className="!w-8 !h-8 text-gray-800 dark:text-white" /> : 
                                    <DarkModeIcon className="!w-8 !h-8 text-gray-800 dark:text-white" />}               
                                </button>                              
                            </li>
                            <li>
                                <button className="humberger-menu flex items-center relative lg:hidden" onClick={handleNavMenu}>
                                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                                </button>
                            </li>                            
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;