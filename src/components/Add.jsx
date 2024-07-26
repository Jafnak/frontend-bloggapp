import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'

const Add = () => {

    const [data,setData] = useState(
        {
            "Message":"",
            "userId":sessionStorage.getItem("userId")
        }
    )
    
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/create",data,{
            headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
        }).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                
                    alert("Successfully Posted")
                } else {
                    alert("Error")
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    


  return (
    <div>
        <Nav/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Post a message</label>
                    <textarea name="Message" id="" className="form-control" value={data.Message} onChange={inputHandler}></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-secondary" onClick={readValue}>Post</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Add