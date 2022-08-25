import React, { useState } from "react";
import ReactDOM from "react-dom";
import './Home.css';
import background from "./img/back.png"
import { useNavigate } from "react-router-dom"

function Home(){

    let navigate = useNavigate();

    const navigateToAdmin = () => {
        navigate('/AdminLogin')
    }

    const navigateToUser = () => {
        navigate('/UserLogin')
    }

    return(

    <div className="bg" >
        <div class="center">
            <button onClick = {navigateToAdmin}>Admin Login</button>
            <br></br>
            <button onClick = {navigateToUser}>User Login</button>
        </div>
    </div>

    )

}

export default Home;