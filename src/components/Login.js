import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    const gotoLogin = () => {
        navigate("/registration")
    }

    function handleLogin(e) {
        e.preventDefault();

        let dataObj = {
            userID: user,
            password: password
        }

        axios.post('http://127.0.0.1:5000/loginCheck', dataObj)
            .then(resp => {
                localStorage.setItem("token", `${dataObj.userID}`)
                navigate("/LgRegistration")

                console.log(resp)
                alert("Login Successfully....")
            })
            .catch(err => {
                console.log(err)
                alert(err.response.data)
                console.log(err.response.data)
            })
    }

    return (

        <div className='container-fluid'>

            <div className='row text-center bg-primary'>
                <div className='col h2 p-1 text-light'>
                    <p> Log-in</p>
                </div>
            </div>

            <div className='row'>

                <div className='col-md-4'>
                    <label>Click here if you have't registered ?</label>
                    <button className='btn btn-warning m-2' onClick={() => gotoLogin()}>Click</button><br /><br />

                </div>

            </div>

            <div className='row justify-content-center text-center'>

                <div className='col-4 bg-primary p-5 rounded'>
                    <form onSubmit={handleLogin} method="POST" action='http://127.0.0.1:5000/loginCheck'>
                        <input className="form-control" name="userID" onChange={(e) => { setUser(e.target.value) }} type="text" placeholder='Enter User Id' /><br /><br />
                        <input className="form-control" name="password" onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Enter Password' /><br /><br />
                        <button  type='submit' className='btn btn-light col-3'>Login</button>
                    </form>
                </div>
            </div>

            Userid : {user} <br /> Password:  {password} <br />
        </div>
    )
}
