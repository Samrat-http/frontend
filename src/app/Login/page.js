"use client"
import "../globals.css";
import "../log.css";
import { useState } from "react";
import Link from 'next/link';

export default function Login(){
    const [formData, setformData] = useState({
        CompanyNameorEmail: "",
        password: " "

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
        //auth logic to be written
    }
    return(
        <div>
            <div className="main-container">
            <div className="LogSty">
                    <h1 >Login</h1>
            </div>
                <div className="L-container">
                    <form onSubmit={hdsubmit} className="form">
                        <div className="name">
                            <label>
                                CompanyName/Email:
                            </label><br/>
                            <input
                                type="text"
                                name = "CompanyNameorEmail"
                                id = "companyoremail"
                                onChange={hdchange}
                                value = {formData.CompanyNameorEmail}
                                placeholder="Enter Company name or email"
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
                            Log In
                        </button>
                        <div><br/>
                            <Link href="">
                                Forgot passowrd
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}