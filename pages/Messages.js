import React from 'react';
import Link from "next/link";
import styles from '../styles/Home.module.css';
// import { Container, Row, Col, Alert, Button, InputGroup, FormControl} from 'reactstrap';
import {Container, Row, Col, Alert, Button, InputGroup, FormControl} from 'react-bootstrap';

function Messages(props) {
    return (
        <div className={styles.candidates}>
        {/*********  HEADER NEEDS TO BE COMPONENT ************/}
        <div className={styles.header}>
            <div className="d-flex justify-content-between">
                <div className={styles.dashboard}>
                    LOGO HERE
                </div>
                <div className="menu-button">
                    <button className={styles.openbtn}>☰</button>
                </div>
            </div>
        </div>

        {/*********  ROW/COL ************/}
        <Row className="g-1">
            <Col xs={3}>
            <div className={styles.desktop_menu_pages}>   
                  <div className={styles.desktop_menu_text}><Link href="/">Home</Link></div>
                  <div className={styles.desktop_menu_text}><Link href="/Messages">Messages</Link></div>
                  <div className={styles.desktop_menu_text}><Link href="/Jobs">Jobs</Link></div>
                  <div className={styles.desktop_menu_text}><Link href="/Candidates"><a>Candidates</a></Link></div>
                  <div className={styles.desktop_menu_text}><a href="#section">Search</a></div>
                  <div className={styles.desktop_menu_text}><a href="#section">Settings</a></div>
              </div>
            </Col>
            <Col xs={9}>
                <div className="container">
                    <div className={styles.page_header}>
                        <div className={styles.page_header_text}>
                            Messages   
                            <div className={styles.page_header_buttons}>
                            <InputGroup>
                                <FormControl
                                placeholder="SEARCH FOR MESSAGE"
                                aria-describedby="basic-addon2"
                                />
                                <Button variant="btn btn-dark" id="button-addon2">FILTER BY JOB</Button>
                                <div className={styles.page_header_buttons}>
                                    <button type="button" className="btn btn-dark" id={styles.page_header_btns}>+</button>
                                </div>
                            </InputGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        </div>
    );
}

export default Messages;