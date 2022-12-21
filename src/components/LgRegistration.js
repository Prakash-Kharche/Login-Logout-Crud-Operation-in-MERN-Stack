import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function LgRegistration() {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const token = localStorage.getItem("token")
    const [loggin, setLoggin] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (token === null) {
            setLoggin(false);
            console.log(token);
        }
    }, [])

    if (loggin === false) {
        navigate("/login")
    }

    function handleSubmit(e) {
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

    const logOut = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (

        <div className='container-fluid'>
            
            <div className='row text-center bg-primary'>
                <div className='col h2 p-1 text-light'>
                    <p> Admin</p>
                </div>
            </div>

            <div className='row justify-content-between m-1'>

                <div className='col-3'>
                    <button className='btn btn-light' onClick={() => navigate("/totalList")}>View Total list here</button><br /><br />
                </div>

                <div className='col-1'>
                    <button className='btn btn-danger' onClick={() => logOut()}>Log Out</button><br /><br />
                </div>

            </div>

            <div className='row justify-content-center text-center'>
                <div className='col-4 bg-primary p-5 rounded'>
                    <label className='h3'>Insert details</label>

                    <form onSubmit={handleSubmit} method="POST" action="http://127.0.0.1:5000/studata" >

                        <input className="form-control" type="text" onChange={(e) => { setUser(e.target.value) }} name='userid' placeholder='Enter Userid' /><br /><br />
                        <input className="form-control" type="password" onChange={(e) => { setPassword(e.target.value) }} name='password' placeholder='Enter Password' /><br /><br />
                        <input className="form-control" type="email" onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder='Enter Email' /><br /><br />
                        <input className="form-control" type="text" onChange={(e) => { setMobile(e.target.value) }} name='mobile' placeholder='Enter Mobile' /><br />
                        <button className='btn btn-success col-3' type='submit'>Submit</button>

                    </form>
                </div>
            </div>

            <p>{user}{password}{email}{mobile} </p>
            {/* <Link to="/totalList">View Total list here</Link> */}
        </div>
    )
}

