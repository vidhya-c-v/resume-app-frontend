import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const SignIn = () => {
    const[input,setInput]=new useState(
        
        {
            
            "email":" ",
            "password":" "
            
        }
        
    )
    const InputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/resume/signin",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("sign-in success!welcome!")
                    setInput(
                        {
                           
                            "email":" ",
                            "password":" "
                            
                        }
                        
                        

                    )
                }
                else{
                    alert("something went wrong!try again")
                }

            }

        )
    }
  return (
    <div>
     <NavBar/>
            <div className="container">
                <div className="row g-3">
                    
                  
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">email</label>
                        <input type="email"  className="form-control" name="email" value={input.email} onChange={InputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="password"   className="form-control" name="password" value={input.password} onChange={InputHandler}/>

                        
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>SIGN-IN</button>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default SignIn