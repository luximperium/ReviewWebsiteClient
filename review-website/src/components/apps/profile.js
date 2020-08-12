import React, { useEffect, useState } from 'react';
import "../../App.css";
import Auth from "../Auth/Auth"
import ProfilePage from "./profilePage"

//Plans for Friday!! Get rid of protected views. We want Login and Signup to appear as modals. I think this will be much cleaner code with a sleeker or more professional end result. If user attempts to visit profile page without being signed in, they will be alerted...? Literally with an alert, or a modal meant to push them thru signing up or logging in. You wanna see our stuff? Okay, this is how. Pay attention to the ability to exit out of the modal. I think that should be doable. Maybe the profile page can check for a token and display "Youre not signed in" if token = true, or it displays the page. This is a back up. 

const Profile = (props) => {
    const [sessionToken, setSessionToken] = useState('');
    console.log(sessionToken);
    console.log(localStorage.getItem('token'));
    useEffect(() => {
        if (localStorage.getItem('token') === undefined){
          setSessionToken('broken');
        } else if (localStorage.getItem('token')) {
          setSessionToken(localStorage.getItem('token'))
        }
      }, [])

    const protectedViews = () => {
        return (sessionToken === localStorage.getItem('token') ? <ProfilePage token={sessionToken}/> : <Auth updateToken={props.updateToken}/>)
      }

    return (
        <div>
            {protectedViews()}
        </div>
    );
};

export default Profile;