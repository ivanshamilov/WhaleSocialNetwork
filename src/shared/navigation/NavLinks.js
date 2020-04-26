import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from "../../util/ auth-context";

import './NavLinks.css'
import Button from '../../util/UIComponents/Button';

const NavLinks = props => {

    const auth = useContext(AuthContext);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/discover'>Discover</NavLink>
            </li>

            {!auth.token &&
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
            }

            {auth.token &&
            <li>
                <NavLink to='/feed'>Feed</NavLink>
            </li>
            }

            {auth.token &&
            <li>
                <NavLink to='/friends'>Friends</NavLink>
            </li>
            }

            {auth.token &&
            <li>
                <NavLink to='/messages'>Messages</NavLink>
            </li>
            }

            {auth.token &&
            <li>
                <NavLink to='/account'>Account</NavLink>
            </li>
            }

{auth.token &&
            <li>
                <Button onClick={auth.logout}>Logout</Button>
            </li>
            }

        </ul>
    )
};

export default NavLinks;