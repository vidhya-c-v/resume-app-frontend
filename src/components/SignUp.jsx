import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SignUp = () => {
    const[input,setInput]=new useState(
        
        {
            "name":" ",
            "age":" ",
            "mobile":" ",
            "email":" ",
            "password":" "
            
        }
        
    )
    const InputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/resume/signup",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("sign-up successfully!")
                    setInput(
                        {
                            "name":" ",
                            "age":" ",
                            "mobile":" ",
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
            <NavBar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">name</label>
                        <input type="text" className="form-control" name="name" value={input.name} onChange={InputHandler} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">age</label>
                        <input type="text" className="form-control" name="age" value={input.age} onChange={InputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">mobile</label>
                        <input type="text" className="form-control" name="mobile" value={input.mobile} onChange={InputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">email</label>
                        <input type="email"  className="form-control" name="email" value={input.email} onChange={InputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="password"   className="form-control" name="password" value={input.password} onChange={InputHandler}/>

                        
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>SIGN-UP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp