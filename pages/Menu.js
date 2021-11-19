import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styles from '../styles/Menu.module.css'
import Link from "next/link";

const Menu = (props) => {
    return (
        <div className={styles.menu} style={{width: props.width}}>
            {/* <button onClick={props.openSidenav}>Open</button> */}
            <button onClick={props.closeNav} className="btn btn-dark" id={styles.closeButton}>X</button>
            <div className={styles.desktop_menu_text}><Link href="/">Home</Link></div>
            <div className={styles.desktop_menu_text}><Link href="/Messages">Messages</Link></div>
            <div className={styles.desktop_menu_text}><Link href="/Jobs">Jobs</Link></div>
            <div className={styles.desktop_menu_text}><Link href="/Candidates"><a>Candidates</a></Link></div>
            <div className={styles.desktop_menu_text}><a href="#section">Search</a></div>
            <div className={styles.desktop_menu_text}><a href="#section">Settings</a></div>
        </div>
    );
}

export default Menu;