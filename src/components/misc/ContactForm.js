import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Formik, Field } from 'formik';

import { contactFormSchema } from '../../utils/formSchemas'
import { firestore } from "../../Fire.js";
import { withToast } from '../misc/AlertHOC'

class ContactForm extends Component {
    addMessage = (values) => {
        firestore.collection('messages').add({
            email: values.email,
            name: values.name,
            message: values.message,
            timestamp: Date.now(),
        }).then(
            this.props.addToast('Message submitted successfully.', { appearance: 'success' })
        );
      }
      
    render() {
        const initialFormState = {
            email: "",
            name: "",
            message: ""
          };

        return (
            <div className="horiz-center">
                <Formik
                    initialValues={initialFormState}
                    onSubmit={(values, actions) => {
                        this.addMessage(values);
                        actions.resetForm()
                    }}
                    validationSchema={contactFormSchema}
                    >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <Grid fluid>
                                {/* Row 1 */}
                                <Row>
                                    <Col sm={12} md={6} className="s-margin-b">
                                        <label>Name:</label>
                                        <br/>
                                        <Field
                                            type="text"
                                            required
                                            onChange={props.handleChange}
                                            placeholder="John Doe"
                                            name="name"
                                            value={props.values.name}
                                        />
                                        <br/>
                                        {props.errors.name && props.touched.name ? (
                                            <span className="red">{props.errors.name}</span>
                                        ) : (
                                            ""
                                        )}
                                        
                                    </Col>
                                    <Col sm={12} md={6} className="s-margin-b">
                                        <label>Email:</label>
                                        <br/>
                                        <Field
                                            type="text"
                                            required
                                            onChange={props.handleChange}
                                            placeholder="john_doe@gmail.com"
                                            name="email"
                                            value={props.values.email}
                                        />
                                        <br/>
                                        {props.errors.email && props.touched.email ? (
                                            <span className="red">{props.errors.email}</span>
                                        ) : (
                                            ""
                                        )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="s-margin-b">
                                        <label>Message:</label>
                                        <br/>
                                        <Field
                                            component="textarea"
                                            required
                                            onChange={props.handleChange}
                                            placeholder="Detail what you want to say here."
                                            name="message"
                                            value={props.values.message}
                                        />
                                        <br/>
                                        {props.errors.message && props.touched.message ? (
                                            <span className="red">{props.errors.message}</span>
                                        ) : (
                                            ""
                                        )}
                                    </Col>
                                </Row>
                                <Row className="m-margin-b center-text">
                                    <Col xs={12}>
                                        <button 
                                            className="custom-btn btn-12"
                                            type="submit" 
                                            disabled={!props.dirty && !props.isSubmitting}>
                                                Submit
                                        </button>
                                    </Col>
                                </Row>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default withToast(ContactForm);