import React, {useState} from 'react';
import { withRouter } from 'next/router';
import { CANDIDATES } from '../data/candidates';
import {Container, Row, Col, Alert, Button, InputGroup, FormControl} from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import Menu from './Menu';

function CandidateView({router: {query}}){
    const [wid, setWid] = useState('0%');
  
    const closeMenu = () => {
        setWid('0%');
      } 
      
    const openMenu = () => {
        setWid('25%');
      }

    return (
        <div className={styles.candidateView_page}>
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

        <Container className={styles.candidateView_container}>
            {CANDIDATES.filter(candidate => query.id == candidate.id).map(candidateInfo => (
                <Row key={candidateInfo.id}>
                    <Col>
                        <div className={styles.candidateView_container_title}>
                            {candidateInfo.jobTitle}
                        </div>
                        <div className={styles.candidateView_score}>
                            {candidateInfo.score}
                        </div>
                        
                        <div className={styles.candidateView_keywords_container}>
                        {candidateInfo.keywords.map((keyword, index) => (
                            <div className={styles.candidateView_keywords} key={index}>
                                {keyword}
                            </div>
                        ))}
                        </div>
                        
                        <div className={styles.CandidateView_para}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. At tellus at urna 
                            condimentum mattis. Nulla facilisi morbi tempus iaculis urna. Et malesuada 
                            fames ac turpis egestas integer eget aliquet. Aliquet porttitor lacus luctus 
                            accumsan tortor posuere. Magna eget est lorem ipsum dolor sit amet consectetur 
                            adipiscing. Aliquam ultrices sagittis orci a scelerisque purus. Eleifend quam 
                            adipiscing vitae proin sagittis nisl rhoncus mattis. Vitae sapien pellentesque 
                            habitant morbi tristique senectus et netus et. Velit dignissim sodales ut eu 
                            sem. Id cursus metus aliquam eleifend mi in nulla. Cursus in hac habitasse 
                            platea dictumst quisque sagittis.
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.candidateView_container_title}>
                            {candidateInfo.firstName} {candidateInfo.lastName}
                        </div>

                        <div className={styles.candidateView_img_cropper}>
                            <img className={styles.candidateView_img} key={candidateInfo.id} src={candidateInfo.imageURL} /> 
                        </div>

                        <div className={styles.candidateView_viewDoc}><a href="#">View Document</a></div>

                        <div className={styles.candidateView_abt}>
                            <div className={styles.candidateView_container_paratitle}>About</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className={styles.candidateView_abt}>
                            <div className={styles.candidateView_container_paratitle}>Work Experience</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.</p>
                        </div>
                 
                        <div className={styles.candidateView_abt}>
                            <div className={styles.candidateView_container_paratitle}>Education</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className={styles.candidateView_abt}>
                            <div className={styles.candidateView_container_paratitle}>Skills</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                </Row>
            ))}
        </Container>
        </div>
      );
}

export default withRouter(CandidateView);