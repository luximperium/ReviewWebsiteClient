import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';


const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/signup",{
            method: 'POST',
            body: JSON.stringify({user:{email: email, username: username, password: password, firstName: firstName, lastName: lastName}}),
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
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} name="firstName" value={firstName} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName} />
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;