import { useState, useEffect } from 'react'
import axios from "axios";
import './VaccList.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const VaccList = () => {
    const [vacc, setVacc] = useState([]);

    useEffect(() => {
        getDets();
    }, []);

    const getDets = async () => {
        const response = await axios.get('http://localhost:5000/vacc_dets');
        setVacc(response.data);
    }

    const deleteCentre = async (id) => {
        await axios.delete(`http://localhost:5000/vacc_dets/${id}`);
        getDets();
    }

    return (        

        <div className="vacc-table">
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Centre</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { vacc && vacc.map && vacc.map((vacc_dets, index) => (
                        <tr key={ vacc_dets.id }>
                            <td>{ index + 1 }</td>
                            <td>{ vacc_dets.cen_name }</td>
                            <td>{ vacc_dets.cust_name }</td>
                            <td>{ vacc_dets.vacc_date }</td>
                            <td><button onClick={ () => deleteCentre(vacc_dets.id) }>Delete</button></td>
                        </tr>
                    )) }
                    
                </tbody>
            </table>
        </div>
    )
}

export default VaccList