import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate()


    const loginUser = () =>{
        axios.post("http://localhost:8000/login", {
            email,
            password
        })
        .then ((res)=>{
            navigate ("/pirates")
        })
        .catch((err)=>{
            alert(err.response.data.error)
        })
    }



  return (
    <div>
        <div>
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col">
                        <div class="card">
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">Login</h2>
                                <form>
                                    <div class="form-outline mb-4">
                                        <input type="email"  class="form-control form-control-lg" onChange = {(e)=>setEmail(e.target.value)} />
                                        <label class="form-label">Your Email</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" class="form-control form-control-lg" onChange = {(e)=>setPassword(e.target.value)}/>
                                        <label class="form-label">Password</label>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={loginUser}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login
