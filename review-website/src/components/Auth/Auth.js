import React, {useState} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    const [sessionToken, setSessionToken] = useState('');
    const [login, setLogin] = useState(false);

    const title = () => {
        return login ? 'Login' : 'Signup'
    }

    const loginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);
    }

    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
      }


    return(
        <Container className="auth-container">
            <Row>
                {!login ?
                <Col md="6">
                    <h1>{title()}</h1>
                    <Signup updateToken={updateToken} />
                    <br/>
                    <Button onClick={loginToggle}>{!login ? 'Login' : 'Signup'}</Button>
                    <br/>
                </Col> :
                <Col md="6" className="login-col">
                    <h1>{title()}</h1>
                    <Login updateToken={updateToken} />
                    <br/>
                    <Button onClick={loginToggle}>{login ? 'Signup' : 'Login'}</Button>
                    <br/>
                </Col>
                }
            </Row>
        </Container>
    )
}

export default Auth;