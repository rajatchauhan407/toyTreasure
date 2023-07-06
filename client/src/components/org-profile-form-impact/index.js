import "./index.scss";
import { useState } from "react";
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice'

export default function OrgProfileImpact(){
    const [yearFounded, setYearFounded] = useState('');
    const submitImpactButton = (e)=>{
        e.preventDefault();
        const impactDetails = {
            founded_year: yearFounded
        }
        FireBaseFirestoreService.createDocument("organization_mission", impactDetails)

}
    return(
    <div className="OrgProfileImpact">
                <form className= "Impact" onSubmit={submitImpactButton}>
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
                            <input type="number" id="numDonors" name="numDonors" min="0" required /> <br />

                            <label htmlFor="autoUpdate">Auto-update Numbers</label>
                            <input type="checkbox" id="autoUpdate" name="autoUpdate" />
                        </div>

                        <div className="Section2">
                            <label htmlFor="numToysReceived">Toys Received</label><br />
                            <input type="number" id="numToysReceived" name="numToysReceived" min="0" required /> <br />

                            <label htmlFor="numKidsSupported">Kids Being Supported</label><br />
                            <input type="number" id="numKidsSupported" name="numKidsSupported" min="0" required /> <br />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
    </div>
) 
}