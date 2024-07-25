import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {


    const [data,setData] = useState(
        {
            "name":"",
            "dob":"",
            "email":"",
            "gender":"",
            "password":"",
            "cpass":""
        }
    )
    
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value},[])
    }
    
    const readValue=()=>{
        
        if(data.password==data.cpass){
            alert("Password  matches")
            console.log(data)
        axios.post("http://localhost:8080/signUp",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully registered")
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userId)
                    navigate("/")
                } else {
                    alert("Can't be registered")
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            })
        }else{
            alert("Can't be added")
        }
    }
    
    let navigate=useNavigate()

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Gender</label>
                            <input type="text" className="form-control" name='gender' value={data.gender} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" name="cpass" id="" className="form-control" value={data.cpass} onChange={inputHandler} />
                        </div>
                        
                        
                           <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                           <Link class="nav-link" to="/">LOGIN</Link> 
                           </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup