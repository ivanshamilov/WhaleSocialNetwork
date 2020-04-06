import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../util/Logo";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import './MainNavigation.css'


import '../../util/icon.png';

const MainNavigation = props => {
    return (
        <React.Fragment>
        <nav className='main-navigation__header-nav'>
            <MainHeader>
                <Link to='/'>
                        <Logo name="Logo" />
                </Link>
                <nav>
                    <NavLinks />
                </nav>
            </MainHeader>
        </nav>
        </React.Fragment>
    )
};

export default MainNavigation;