import React, {useState} from 'react';
import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    const [sessionToken, setSessionToken] = useState('');
    const [login, setLogin] = useState(false);
    const [modal, setModal] = useState(false);
    

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

    const toggle = () => setModal(!modal);

    


    return(
        // <Container>
        //     <Row>
        //         {!login ?
        //         <Col md="6">
        //             <h1>{title()}</h1>
        //             <Signup updateToken={updateToken} />
        //             <br/>
        //             <Button onClick={loginToggle}>{!login ? 'Login' : 'Signup'}</Button>
        //             <br/>
        //         </Col> :
        //         <Col md="6" className="login-col">
        //             <h1>{title()}</h1>
        //             <Login updateToken={updateToken} />
        //             <br/>
        //             <Button onClick={loginToggle}>{login ? 'Signup' : 'Login'}</Button>
        //             <br/>
        //         </Col>
        //         }
        //     </Row>
        // </Container>

        <div className="main">
            <div className="mainDiv">
            <Button onClick={toggle}>Not Signed In?</Button>
            {!login ?
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>{title()}</ModalHeader>
                    <ModalBody><Signup updateToken={updateToken} /></ModalBody>
                    <ModalFooter><Button onClick={loginToggle}>{!login ? 'Login' : 'Signup'}</Button></ModalFooter>
                </Modal>    :
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>{title()}</ModalHeader>
                    <ModalBody><Login updateToken={updateToken} onSubmit={toggle} /></ModalBody>
                    <ModalFooter><Button onClick={loginToggle}>{login ? 'Signup' : 'Login'}</Button></ModalFooter>
                </Modal>
            }
            </div>
        </div>
    )
}

export default Auth;