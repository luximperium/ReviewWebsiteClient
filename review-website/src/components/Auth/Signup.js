import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input, Button, FormFeedback, ButtonToggle} from 'reactstrap';
import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';
// import validateSignup from './validateSignup';


const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [errors, setErrors] = useState({})
    // const [isSubmitting, setIsSubmitting] = useState(false)

    let handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://tna-blue-review-server.herokuapp.com/user/signup",{
            method: 'POST',
            body: JSON.stringify({user:{email: email, username: username, password: password, firstName: firstName, lastName: lastName}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }) .then(
            (response) => response.json()
        ) .then((data) => {
            props.updateToken(data.sessionToken)
        }) .then(() => {
            if(localStorage.getItem('token')) {
                props.toggle();
            }
        })
    }

    


        // setErrors(validateSignup(username, email, password)));
        // console.log(errors)
        //setIsSubmitting(true);
        
    
        })}

    

    //TODO: Use validation function to set className of the inputs ((error.length === 0) ? valid : invalid) to create visual effects. Attach this to onChange in block body(?) or in handleSubmit. setIsSubmitting, then use a useEffect monitoring cheange in error to check conditionitionally if isSubmitting is true and no errors to run our fetch
    
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
                    //className= {errors.username ? ":invalid" : ":valid}"}
                    />
                    <FormFeedback></FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input 
                    onChange={(e) => setEmail(e.target.value)} 
                    name="email" 
                    value={email}
                    required
                    type="email"
                    pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                    placeholder="user@email.com"
                    //className= {errors.email ? ":invalid" : ":valid}"}
                    />
                    <FormFeedback></FormFeedback>
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
                    //className= {errors.password ? ":invalid" : ":valid}"}
                    />
                    <FormFeedback></FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="firstName">First Name:</Label>
                    <Input 
                    onChange={(e) => setFirstName(e.target.value)} 
                    name="firstName" 
                    value={firstName} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name:</Label>
                    <Input 
                    onChange={(e) => setLastName(e.target.value)} 
                    name="lastName" 
                    value={lastName} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
    }

export default Signup;