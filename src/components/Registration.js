import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Registration() {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const navigate = useNavigate();

    function handleSubmit(e) {
        navigate("/login")
        e.preventDefault();
        let dataObj = {
            user: user,
            password: password,
            email: email,
            mobile: mobile
        }
        axios.post('http://127.0.0.1:5000/studata', dataObj)
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err)
            })
        alert("User Created Successfully...!!!")
    }

    const gotoLogin = () => {
        navigate("/login")
    }

    return (
        <div>
            <div className='row text-center bg-primary'>
                <div className='col h2 p-1 text-light'>
                    <p> Register here </p>
                </div>
            </div>

            <label>Click here if you already registered</label>
            <button className='btn btn-warning m-2' onClick={() => gotoLogin()}> Click</button> <br /><br />

            <div className='row justify-content-center text-center'>
                <div className='col-4 bg-primary p-5 rounded'>

                    <form onSubmit={handleSubmit} method="POST" action="http://127.0.0.1:5000/studata" >

                        <input className="form-control" type="text" onChange={(e) => { setUser(e.target.value) }} name='userid' placeholder='Enter Userid' /><br /><br />
                        <input className="form-control" type="password" onChange={(e) => { setPassword(e.target.value) }} name='password' placeholder='Enter Password' /><br /><br />
                        <input className="form-control" type="email" onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder='Enter Email' /><br /><br />
                        <input className="form-control" type="text" onChange={(e) => { setMobile(e.target.value) }} name='mobile' placeholder='Enter Mobile' /><br /><br />
                        <button className='btn btn-success' type='submit'>Submit</button>

                    </form>
                </div>
            </div>

            <p>{user}{password}{email}{mobile} </p>
        </div>
    )
}

