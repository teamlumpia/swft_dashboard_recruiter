import React from 'react';
import styles from '../styles/Home.module.css';
import Calendar from './Calendar';
import Graph from './Graph';
import { Container, Row, Col, Alert } from 'reactstrap';

const Dashboard = (props) => {
    return (
   <>
        <div className="container">        
         <div className="row g-0" className={styles.dash_top}>
          <div className="col">
              <div className="row g-0">
                <div className="col">
                  <div className={styles.dash_waiting}>
                    <div className={styles.dash_waiting_text}>
                      24
                    </div>
                    WAITING CANDIDATES
                  </div>
                </div>
               
                <div className="col">
                  <div className={styles.dash_waiting_white}>
                    <div className={styles.dash_waiting_text}>
                      100
                    </div>
                    TOTAL APPLIED
                    </div>
                </div>

                <div className="col">
                  <div className={styles.dash_waiting_white}>
                    <div className={styles.dash_waiting_text}>
                      100
                    </div>
                    TOTAL SWIPED
                    </div>
                </div>
             

                <div className="col">
                  <div className={styles.dash_waiting_white}>
                    <div className={styles.dash_waiting_text}>
                      5
                    </div>
                    ACTIVE REQS
                    </div>
                </div>

              </div>
          </div>

            {/* <div className="container">
              <div className="row">
                <div className="col">
                  <div className={styles.calendar}>
                    CALENDAR
                  </div>
                </div>
                <div className="col">
                  <div className={styles.calendar}>
                    CALENDAR
                  </div>
                </div>
              </div>
            </div> */}
            
            <div className="row g-0">
                <div className="col-6">
                    <div className="container">
                    <Calendar/>
                    </div>
               
                </div>
              <div className="col-6">
                  <div className="container">
                  <Graph />
                  </div>
                 
                </div>
            </div>
            
            <div className="row">
              <div className="col"></div>
            </div> 

         </div>
         </div>
    </>
    );
}

export default Dashboard;