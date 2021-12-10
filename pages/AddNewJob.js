import React from 'react';
import styles from '../styles/Home.module.css';
import {Form, Container, Row, Col, Alert, Button, InputGroup, FormControl} from 'react-bootstrap';

const AddNewJob = (props) => {
    return (
        <div className={styles.addNewJob_page}>
            <div className={styles.addNewJob_title}>Add New Job</div>
            <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label className={styles.addNewJob_labels}>Job Title</Form.Label>
                        <Form.Control type="text" placeholder="JOB NAME" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className={styles.addNewJob_labels}>Company</Form.Label>
                        <Form.Control type="text" placeholder="COMPANY" />
                    </Form.Group>            
                    <Form.Group className="mb-3">
                        <Form.Label className={styles.addNewJob_labels}>Location</Form.Label>
                        <Row>
                            <Col>
                            <Form.Select>
                                <option>COUNTRY</option>
                            </Form.Select>
                            </Col>
                            <Col>
                            <Form.Select>
                                    <option>CITY</option>
                            </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label className={styles.addNewJob_labels}>Link to job</Form.Label>
                        <Form.Control type="text" placeholder="JOB URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className={styles.addNewJob_labels}>Job Description</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    );
}

export default AddNewJob;