import { useState, useEffect } from 'react'
import axios from "axios";
import './VaccList.css';

const CentreList = () => {
    const [centres, setCentre] = useState([]);

    useEffect(() => {
        getCentres();
    }, []);

    const getCentres = async () => {
        const response = await axios.get('http://localhost:5000/centres');
        setCentre(response.data);
    }

    const deleteCentre = async (id) => {
        await axios.delete(`http://localhost:5000/centres/${id}`);
        getCentres();
    }

    return (
        <div>
            <table className="vacc-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Centre</th>
                    </tr>
                </thead>
                <tbody>
                    { centres.map((centre, index) => (
                        <tr key={ centre.id }>
                            <td>{ index + 1 }</td>
                            <td>{ centre.cen_name}</td>
                            <td>
                                <button onClick={ () => deleteCentre(centre.id) }>Delete</button>
                            </td>
                        </tr>
                    )) }
                    
                </tbody>
            </table>
        </div>
    )
}

export default CentreList