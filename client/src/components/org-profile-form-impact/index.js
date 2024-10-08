/* eslint-disable react-hooks/exhaustive-deps */
import "./index.scss";
import { useState,useEffect } from "react";
// import FireBaseFirestoreService from '../../services/Firebasefirestoreservice'

export default function OrgProfileImpact({onProfileImpact}){
    const [yearFounded, setYearFounded] = useState('');
    const [donorNumber, setDonorNumber] = useState('');
    const [kidsNumber, setKidsNumber] = useState('');
    const [toysNumber, setToysNumber] = useState('');
//     const submitImpactButton = (e)=>{
//         e.preventDefault();
//         const impactDetails = {
//             founded_year: yearFounded,
//             total_donors: donorNumber,
//             kids: kidsNumber,
//             toys: toysNumber
//         }
//         // FireBaseFirestoreService.createDocument("organization_mission", impactDetails)

// }
useEffect(()=>{
    const impactDetails = {
        founded_year: yearFounded,
        total_donors: donorNumber,
        kids: kidsNumber,
        toys: toysNumber
    }
    onProfileImpact(impactDetails);
},[yearFounded,donorNumber,kidsNumber,toysNumber])
    return(
    <div className="OrgProfileImpact">
                <form className= "Impact">
                    <h2>Impact of Organization</h2>
                    <p>Add the numbers of impact in your organization</p>

                    <div className="statistics">
                        <div className="Section1">
                            <label htmlFor="yearFounded">Year Founded</label> <br />
                            <input 
                            type="number" 
                            onChange={(e)=>{setYearFounded(e.target.value)}} 
                            id="yearFounded" 
                            name="yearFounded" 
                            min="1900" 
                            max="2023" 
                            required /> <br />

                            <label htmlFor="numDonors">Donors</label> <br />
                            <input 
                            type="number" 
                            id="numDonors" 
                            onChange={(e)=>{setDonorNumber(e.target.value)}} 
                            name="numDonors" 
                            min="0" 
                            required /> 
                            <br />
                        </div>

                        <div className="Section2">
                            <label htmlFor="numToysReceived">Toys Received</label><br />
                            <input 
                            type="number" 
                            id="numToysReceived" 
                            name="numToysReceived" 
                            min="0" 
                            onChange={(e)=>{setToysNumber(e.target.value)}} 
                            required
                             /> 
                             <br />

                            <label htmlFor="numKidsSupported">Kids Being Supported</label><br />
                            <input 
                            type="number" 
                            id="numKidsSupported" 
                            name="numKidsSupported" 
                            onChange={(e)=>{setKidsNumber(e.target.value)}}
                            min="0" 
                            required /> 
                            <br />
                        </div>
                    </div>
                    
                </form>
    </div>
) 
}