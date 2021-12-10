import React, {useState} from 'react';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import Menu from '../pages/Menu';
// import { Container, Row, Col, Alert, Button, InputGroup, FormControl} from 'reactstrap';
import {Container, Row, Col, Alert, Button, InputGroup, FormControl} from 'react-bootstrap';
import { CANDIDATES } from '../data/candidates';
import {getCandidates, createCandidate, deleteCandidate} from '../data/candidate_api';
import CandidateView from './CandidateView';

class Candidates extends React.Component {
    displayCandidate = () => {
        return (
            CANDIDATES.map((data, id) => {
                return (
                    <Link href={{ pathname: '/CandidateView', query: { id: data.id } }}>
                        <Row className={styles.candidate_list}>
                            <Col>
                                <div className={styles.candidate_list_profile_img_cropper}>
                                    <img className={styles.candidate_list_profile_img} key={data.id} src={data.imageURL} /> 
                                </div>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">                         
                                <div className={styles.candidate_list_text} key={data.id}>{data.firstName} {data.lastName}</div>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">
                                <div key={data.id}>{data.score}</div>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">
                                <div key={data.id}>{data.swiped}</div>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">
                                <div key={data.id}>{data.jobTitle}</div>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">
                                <div key={data.id}>{data.keywords}</div>
                            </Col>
                        </Row>
                    </Link>
                )
            })
        )
    }

    render() {
        return(
            <div className={styles.candidates}>
            {/*********  HEADER NEEDS TO BE COMPONENT ************/}
            <div className={styles.header}>
                <div className="d-flex justify-content-between">
                    <div className={styles.dashboard}>
                        LOGO HERE
                    </div>
                    <div className="menu-button">
                        <button className={styles.openbtn} onClick={Menu}>☰</button>
                    </div>
                </div>
            </div>
        
    
            {/*********  ROW/COL ************/}
            <Row className="g-1">
                <Col xs={3}>
                <div className={styles.desktop_menu_pages}>   
                    <div className={styles.desktop_menu_text_container}>
                      <div className={styles.desktop_menu_text}><Link href="/">Home</Link></div>
                      <div className={styles.desktop_menu_text}><a href="#section">Messages</a></div>
                      <div className={styles.desktop_menu_text}><Link href="/Jobs">Jobs</Link></div>
                      <div className={styles.desktop_menu_text}><Link href="/Candidates"><a>Candidates</a></Link></div>
                      <div className={styles.desktop_menu_text}><a href="#section">Search</a></div>
                      <div className={styles.desktop_menu_text}><a href="#section">Settings</a></div>
                      </div>
                  </div>
                </Col>
                <Col xs={9}>
                    <div className="container">
                        <div className={styles.page_header}>
                            <div className={styles.page_header_text}>
                                CANDIDATES   
                                <div className={styles.page_header_buttons}>
                                    <button type="button" className="btn btn-dark" id={styles.page_header_btns}>RESUME UPLOAD</button>
                                    <button type="button" className="btn btn-dark" id={styles.page_header_btns}>FIND NEW CANDIDATES</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className={styles.page_header}>
                            <div className={styles.page_header_text}>
                               
                                <InputGroup>
                                    <FormControl
                                    placeholder="search for candidate"
                                    aria-describedby="basic-addon2"
                                    />
                                    <Button variant="btn btn-dark" id="button-addon2">Search</Button>
                                    <div className={styles.page_header_buttons}>
                                    <button type="button" className="btn btn-dark" id={styles.page_header_btns}>FILTER BY JOB</button>
                                    <button type="button" className="btn btn-dark" id={styles.page_header_btns}>FILTER MATCH</button>
                                    <button type="button" className="btn btn-dark" id={styles.page_header_btns}>+</button>
                                </div>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                      {/*********  LIST OF CANDIDATES ************/}
                    <div className="container">
                        <div className={styles.page_header}>
                        <Row>
                            <Col>
                                <div></div>
                            </Col>
                            <Col>
                                <div className={styles.candidate_list_title}>NAME</div>
                            </Col>
                            <Col>
                                <div className={styles.candidate_list_title}>JOB MATCH</div>
                            </Col>
                            <Col>
                                <div className={styles.candidate_list_title}>SWIPED</div>
                            </Col>
                            <Col>
                                <div className={styles.candidate_list_title}>JOB TITLE</div>
                            </Col>
                            <Col>
                                <div className={styles.candidate_list_title}>KEYWORDS</div>
                            </Col>
                           
                        </Row>
                        <Row>
                        {this.displayCandidate()}
                        </Row>
                        </div>
                    </div>

                </Col>
            </Row>
        </div>
        )
    }
}

export default Candidates;