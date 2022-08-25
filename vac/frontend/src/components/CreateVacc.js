import { useState } from 'react'
import axios from "axios";
import './AdminLogin.css';
import { Navigate, useNavigate } from "react-router-dom"

const AddVacc = () => {
    const [cen_name, setCen] = useState('');
    const [cust_name, setCust] = useState('');
    const [vacc_date, setDate] = useState('');

    const navigate = useNavigate();

    const saveDet = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/vacc_dets',{
            cen_name: cen_name,
            cust_name: cust_name,
            vacc_date: vacc_date
        });
        navigate('/')
    }

    return (
        <div className="app">
            <h1>Enter registration details</h1>
            <form onSubmit={ saveDet } classname="login-form">
                <div>
                    <label className="label">Centre:</label>
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Centre" 
                        value={ cen_name }
                        onChange={ (e) => setCen(e.target.value) }
                    />
                </div>

                <br></br>

                <div>
                    <label className="label">Name :</label>
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Name" 
                        value={ cust_name }
                        onChange={ (e) => setCust(e.target.value) }
                    />
                </div>

                <br></br>

                <div>
                    <label className="label">Date: </label>
                    <input 
                        className="input" 
                        type="date" 
                        value={ vacc_date }
                        onChange={ (e) => setDate(e.target.value) }
                    />
                </div>

                <br></br>

                <div>
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddVacc