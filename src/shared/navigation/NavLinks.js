import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from "../../util/ auth-context";

import './NavLinks.css'

const NavLinks = props => {

    const auth = useContext(AuthContext);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/discover'>Discover</NavLink>
            </li>

            {!auth.isLoggedIn &&
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
            }

            {!auth.isLoggedIn &&
            <li>
                <NavLink to='/signup'>Sign Up</NavLink>
            </li>
            }

            {auth.isLoggedIn &&
            <li>
                <NavLink to='/feed'>Feed</NavLink>
            </li>
            }

            {auth.isLoggedIn &&
            <li>
                <NavLink to='/friends'>Friends</NavLink>
            </li>
            }

            {auth.isLoggedIn &&
            <li>
                <NavLink to='/messages'>Messages</NavLink>
            </li>
            }

            {auth.isLoggedIn &&
            <li>
                <NavLink to='/account'>Account</NavLink>
            </li>
            }

        </ul>
    )
};

export default NavLinks;