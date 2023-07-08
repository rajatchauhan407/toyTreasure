import { useState } from "react";
import "./index.scss";
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";



export default function OrgProfileDetails(){
    const [orgName,setOrgName]=useState("Charity");
    async function saveData(e)
    {
        e.preventDefault();
        const formDetails ={
            org_name:orgName
        }
        let refId = await FireBaseFirestoreService.createDocument("organization_profile",formDetails);
        console.log("ref-id  "+refId);
    }
  
    return(
        <div className="OrgProfileDetails">
            <form className="Details" onSubmit={saveData}>
                <label htmlFor="orgName">Organization Name</label><br />
                <input 
                    type="text" 
                    id="orgName" 
                    value={orgName}
                    onChange={(e)=>{setOrgName(e.target.value)}}
                    required /><br />
    
                <label htmlFor="orgDescription">Organization Description {orgName}</label><br />
                <textarea id="orgDescription" name="orgDescription" rows="4" cols="50" maxLength="250" required></textarea><br />
    
                <label htmlFor="orgCRA">CRA Registered Charity</label><br />
                <input type="text" id="orgCRA" name="orgCRA" pattern="[a-zA-Z0-9]{1,15}" required /><br />
    
                <div className="one-line">
                    <div className="sect-1">
                        <label htmlFor="orgAddress1">Address Line 1</label><br />
                        <input type="text" id="orgAddress1" name="orgAddress1" required /><br />

                        <label htmlFor="orgCity">City</label><br />
                        <input type="text" id="orgCity" name="orgCity" required /><br />

                        <label htmlFor="orgProvince">Province</label><br />
                        <select id="orgProvince" name="orgProvince" required>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="New Brunswick">New Brunswick</option>
                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                            <option value="Northwest Territories">Northwest Territories</option>
                            <option value="Nova Scotia">Nova Scotia</option>
                            <option value="Nunavut">Nunavut</option>
                            <option value="Ontario">Ontario</option>
                            <option value="Prince Edward Island">Prince Edward Island</option>
                            <option value="Quebec">Quebec</option>
                            <option value="Saskatchewan">Saskatchewan</option>
                            <option value="Yukon">Yukon</option>
                        </select><br />
                    </div>
                    <div className="sect-2">
                        <label htmlFor="orgAddress2">Address Line 2</label><br />
                        <input type="text" id="orgAddress2" name="orgAddress2" required /><br />
            
                        <label htmlFor="orgZip">Zip Code</label><br />
                        <input type="text" id="orgZip" name="orgZip" required /><br />
            
                        <label htmlFor="orgCountry">Country</label><br />
                        <input type="text" id="orgCountry" name="orgCountry" value="Canada" disabled /><br />
                    </div>
                </div>
        
                <label htmlFor="orgEmail">Email</label><br />
                <input type="email" id="orgEmail" name="orgEmail" required /><br />
    
                <label htmlFor="contactNumber">Contact Number</label><br />
                <div className="phone-input">
                    <input type="text" id="countryCode" name="countryCode" value="+1" disabled />
                    <input type="number" id="phoneNumber" name="phoneNumber" required />
                </div>
                <button type="submit">Save Data</button>
            </form>
        </div>
)
}

