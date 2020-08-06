import React, { useEffect, useState } from 'react';
import "../../App.css";
import Auth from "../Auth/Auth"
import ProfileIndex from "./profileIndex"

const Profile = (props) => {
    const [sessionToken, setSessionToken] = useState('');

    useEffect(() => {
        if (localStorage.getItem('token')){
          setSessionToken(localStorage.getItem('token'));
        }
      }, [])

    const protectedViews = () => {
        return (sessionToken === localStorage.getItem('token') ? <ProfileIndex token={sessionToken}/> : <Auth updateToken={props.updateToken}/>)
      }

    return (
        <div>
            {protectedViews()}
        </div>
    );
};

export default Profile;