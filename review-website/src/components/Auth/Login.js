import React, {useState, useEffect} from 'react';
import {Form, FormGroup, FormText, FormFeedback, Label, Input, Button} from 'reactstrap';
// import validateLogin from './validateLogin'
import APIURL from '../../../helpers/environment';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({  })
    

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`,{
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }) .then(
            (response) => response.json()
        ) .then((data) => {
            props.updateToken(data.sessionToken)
        }) 

        
    }

    

    
    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username:</Label>
                    <Input 
                    onChange={(e) => setUsername(e.target.value)}  
                    name="username" 
                    value={username}
                    required
                    placeholder="username1"
                    minLength={4}
                    pattern="^(?=.*[A-Za-z])((?=.*\d)|(?=.*[@$!%*#?&]))[A-Za-z\d@$!%*#?&]{4,}$"
                    /><FormFeedback></FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input 
                    onChange={(e) => setPassword(e.target.value)}  
                    name="password" 
                    value={password}
                    required
                    type="password"
                    minLength={5}
                    placeholder="******"
                    /><FormFeedback></FormFeedback>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Login;