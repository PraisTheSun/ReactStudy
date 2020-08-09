import React from 'react';
import cl from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                <NavLink to="/profile" activeClassName={cl.active}>Profile</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/dialogs" activeClassName={cl.active}>Message</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/news" activeClassName={cl.active}>News</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/music" activeClassName={cl.active}>Music</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/settings" activeClassName={cl.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;