import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { bindActionCreators } from 'redux';
import { AuthActions } from '../redux/store';
import { useDispatch } from 'react-redux';
import { Button, Form, Card } from 'react-bootstrap';
const LoginForm = (props) => {
    const [facebookLink, setFacebookLink] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const actions = bindActionCreators({ ...AuthActions }, useDispatch())
    const getFacebookLink = async () => {
        const res = await axios.get(`http://localhost/api/auth/facebook`)
        console.log(res.data)
        setFacebookLink(res.data);
    }
    useEffect(() => {
        getFacebookLink();
    })
    const LoginPSU = (e) => {
        e.preventDefault();
        // const { username, password } = e.target.elements;
        // console.log(username.value, password.value)
        actions.loginPSU(username, password);
    }
    return (
        <div>
            <div class="alert alert-primary" role="alert">

                <div class="card">
                    <h5 class="card-header">Facebook</h5>
                    <div class="card-body">
                        <h5 class="card-title">login with facebook</h5>
                        <div style={{width:"200px"}}><img  src="https://i.pinimg.com/originals/d7/c1/d0/d7c1d07b8d763870d4b59c10603ed092.png" class="card-img-top" alt="..."/></div>
                        
                        <Button variant="outline-primary" href={facebookLink}>LOGIN</Button>
                    </div>
                </div>
            </div>
            <div class="alert alert-success" role="alert">
                <h1>PSU PASSPORT</h1>

                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="addon-wrapping">Username</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <br></br>
                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="addon-wrapping">password</span>
                    </div>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br></br>
                <div><button type="button" class="btn btn-success" onClick={LoginPSU}>LOGIN</button></div>
            </div>
        </div>
    )

}
export default LoginForm;