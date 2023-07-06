import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoRose from '../assets/LOGO.svg';
const Navigation = () => {
    return (
    <header>
        <div className='logo'>
            <img src={LogoRose} alt='kasa'></img>
        </div>

        <div className='navigation'>

            <ul>
                <NavLink to="/"className={(nav)=>(nav.isActive?"nav_active":"")}>
                    <li>
                        Accueil
                    </li>
                </NavLink>
                <NavLink to="/About"className={(nav)=>(nav.isActive?"nav_active":"")}>
                    <li>
                        A propos
                    </li>
                </NavLink>
            </ul>
        </div>
        </header>
    );
};

export default Navigation;