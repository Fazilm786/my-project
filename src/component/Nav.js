import React from 'react';
import {NavLink} from 'react-router-dom'


function Nav (){
    return (
        
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>LoginPage</NavLink>
                </li>
                <li>
                    <NavLink to ='/CreateAccount'>CreateAccount</NavLink>
                </li>
                <li>
                    <NavLink to='/About'>About</NavLink>
                </li>
            </ul>
        </nav>

    );

};

export default Nav;