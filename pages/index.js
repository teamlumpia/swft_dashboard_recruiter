import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Menu from '../pages/Menu';
import Dashboard from './Dashboard';
import Link from "next/link";
import { Container, Row, Col, Alert } from 'reactstrap';

export default function Home(props) {
  const [wid, setWid] = useState('25%');
  
    const closeMenu = () => {
      setWid('0%');
    } 

    const openMenu = () => {
      setWid('25%');
    }

  return (
    <div className={styles.main}>
      {/* https://github.com/vercel/styled-jsx#via-interpolated-dynamic-props */}
      <style jsx global>{ `body { 
        background: #e0e1e2; 
        overflow: hidden;
        }`} 
      </style>
      <Head>
        <title>Get SWFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <div className={styles.header}>
          <div className="d-flex justify-content-between">
              <div className={styles.dashboard}>
                      LOGO HERE
              </div>
              <div className="menu-button">
                <button className={styles.openbtn} onClick={openMenu}>☰</button>
              </div>
            </div>
        </div>

        {/********* WHEN IN MOBILE MODE ************/}
        <Menu width={wid} closeNav={closeMenu}/>

        <Row>
          <Col xs={3}>
              <div className={styles.desktop_menu}>   
              <div className={styles.desktop_menu_text}><Link href="/">Home</Link></div>
                  <div className={styles.desktop_menu_text}><Link href="/Messages">Messages</Link></div>
                  <div className={styles.desktop_menu_text}><Link href="/Jobs">Jobs</Link></div>
                  <div className={styles.desktop_menu_text}><Link href="/Candidates"><a>Candidates</a></Link></div>
                  <div className={styles.desktop_menu_text}><a href="#section">Search</a></div>
                  <div className={styles.desktop_menu_text}><a href="#section">Settings</a></div>
              </div>
          </Col>
          <Col xs={9}>
          <Dashboard/>
            </Col>
        </Row>


     
    
      </main>


    </div>
  )
}
