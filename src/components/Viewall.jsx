import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const Viewall = () => {
    const [data,changedData]=useState([])
    const fetchData=()=>{

        axios.post("http://localhost:8080/viewall",{},{
            headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
        }).then(
          (response)=>{
            console.log(response.data)
            changedData(response.data)
          }
        ).catch(
            (error)=>{console.log(error)}
        ).finally()
  
    }
      useEffect(()=>{fetchData()},[])
  return (
    <div>
    <Nav/>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                <div className="row g-3">
                {data.map(
              (value,index)=>{
                return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div class="card" >
                  <img src="..." class="card-img-top" alt="..."/>

                  <div class="card-body">
                    <h5 class="card-title">{value.Message}</h5>
                    <p class="card-text"><small class="text-body-secondary"> Posted on:{value.postedDate}  </small></p>
                  </div>
                </div>
  
              </div>
              }
            )}
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Viewall