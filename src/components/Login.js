import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux'

import {saveToken} from '../redux/actions'
import Requests from '../network/Requests'

class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : '',
            grantType : 'password'
        }
      }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        Requests.loginRequest(this.state.username, this.state.password, this);
        this.setState({ username: '', password : ''})
    }

    render() {
      return (   
          
        <Container>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
        <Form onSubmit={this.onSubmit}>
            <Row>         
                <Col xs={8} md={4}></Col>
                <Col xs={8} md={4}>
                    <Form.Group controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={this.onChange} name="username"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password}  onChange={this.onChange} name="password"/>
                    </Form.Group>
                    <Button variant="primary" size="lg" block type="submit">
                        Login
                    </Button>
                </Col>
                <Col xs={8} md={4}></Col>           
            </Row>
            </Form>
           
        </Container>
        
      )
    }
}

export default connect(
    null,
    {saveToken}
)(Login)