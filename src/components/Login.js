import React from 'react'
import {accessUrl} from "./../spotify.js";

const Login = () => {
    return (
        <div>
            <h3>Spotify</h3>
            <a href={accessUrl}>login with spotify</a>
        </div>
    )
}
export default Login;
