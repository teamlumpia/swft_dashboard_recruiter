import React, {useState} from 'react';
import Link from "next/link";
import styles from '../styles/Home.module.css';
// import { Container, Row, Col, Alert, Button, InputGroup, FormControl} from 'reactstrap';
import { JOBS } from '../data/jobs';
import {Container, Row, Col, Alert, Button, InputGroup, FormControl} from 'react-bootstrap';
import Modal from 'react-modal';
import AddNewJob from './AddNewJob';

function displayJobs() {
    return (
        JOBS.map((data, id) => {
            return (
                <Row className={styles.jobs_list}>
                     <Col>
                        <div key={id}>{data.jobTitle}</div>
                        <div className="jobs_postdate">{data.postdate}</div>
                    </Col>
                    <Col>
                        <div>{data.location}</div>
                    </Col>
                    <Col>
                        <div>{data.keywords}</div>
                    </Col>
                </Row>
            )
        })
    )
}

const Jobs = ({history}) => {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

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
                            Jobs   
                            <div className={styles.page_header_buttons}>
                            <InputGroup className={styles.inputGroup}>
                                <FormControl
                                placeholder="SEARCH FOR JOB"
                                aria-describedby="basic-addon2"
                                />
                                <Button variant="btn btn-dark" id="button-addon2">Search</Button>
                                
                                <Modal
                                    isOpen={show}
                                    onRequestClose={closeModal} 
                                    ariaHideApp={false}
                                    style={customStyles}
                                > 
                                <AddNewJob />
                                    <Button variant="btn btn-dark" className={styles.close_modal_popup} onClick={closeModal}>X</Button>
                                </Modal>

                                <a onClick={openModal}>
                                    <div className={styles.page_header_buttons}>
                                        <button type="button" className="btn btn-dark" id={styles.page_header_btns}>+</button>
                                    </div>
                                </a>
                            </InputGroup>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className={styles.page_header}>
                            <Row>
                                <Col>
                                    <div className={styles.candidate_list_title}>JOB TITLE</div>
                                </Col>
                                <Col>
                                    <div className={styles.candidate_list_title}>LOCATION</div>
                                </Col>
                                <Col>
                                    <div className={styles.candidate_list_title}>KEYWORDS</div>
                                </Col>
                            </Row>
                            <Row>
                                {displayJobs()}
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        </div>
    );
}

const customStyles = {
    content : {
        alignContent: 'right',
        justifyContent: 'right'
    }
}


export default Jobs;