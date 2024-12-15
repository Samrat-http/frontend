"use client"
import "../globals.css";
import "../reg.css";
import { useState } from "react";
import Link from 'next/link';

export default function Login(){
    const [formData, setformData] = useState({
        FullName: "",
        CompanyName: "",
        Email: "",
        password: ""

    })

    const hdchange = (e) =>{ //e i sevent obejct
        const {name, value} = e.target; // e.target refers to which input field is the target
        setformData({
            ...formData, // "..." destructuring operator
            [name]:value  //name refers to which input filed and value refers to ists value when we update the input field this function gets triggereed and changes the state for eg. [password]: 1234
        })
    }

    const hdsubmit = (e) => {
        e.preventDefault();
        console.log("Login successfully");
        //validation logic to be written
    }
    return(
        <div>
            <div className="main-container">
            <div className="LogSty">
                    <h1 >Register</h1>
            </div>
                <div className="L-container">
                    <form onSubmit={hdsubmit} className="form">
                        <div className="name">
                            <label>
                                FullName:
                            </label><br/>
                            <input
                                type="text"
                                name = "FullName"
                                id = "fullname"
                                onChange={hdchange}
                                value = {formData.FullName}
                                placeholder="Enter your Name"
                                required
                            />
                        </div><br/>

                        <div className="compname">
                            <label>
                                Company Name:
                            </label><br/>
                            <input
                                type="text"
                                name = "CompanyName"
                                id = "compname"
                                onChange={hdchange}
                                value = {formData.CompanyName}
                                placeholder="Enter your Company Name"
                                required
                            />
                        </div><br/>

                        <div className="email">
                            <label>
                                Eamil:
                            </label><br/>
                            <input
                                type="email"
                                name = "Email"
                                id = "email"
                                onChange={hdchange}
                                value = {formData.Email}
                                placeholder="Enter Yours or Company Email"
                                required
                            />
                        </div><br/>
                        <div className="password">
                            <label>
                                Password:
                            </label><br/>
                            <input
                                type="text"
                                name = "password"
                                id = "pass"
                                onChange={hdchange} //whem the input field i schanged is here the hdchange changes its field of passowrd from empty(set intially) to the value
                                value = {formData.password}
                                placeholder="Enetr password"
                                required
                            />
                        </div><br/>
                        <button>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}