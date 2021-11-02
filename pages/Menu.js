import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styles from '../styles/Menu.module.css'

const Menu = (props) => {
    return (
        <div className={styles.menu} style={{width: props.width}}>
            {/* <button onClick={props.openSidenav}>Open</button> */}
            <button onClick={props.closeNav}>X</button>
                <a href="#section">Home</a>
                <a href="#section">Services</a>
                <a href="#section">Clients</a>
                <a href="#section">Contact</a>
        </div>
    );
}

export default Menu;