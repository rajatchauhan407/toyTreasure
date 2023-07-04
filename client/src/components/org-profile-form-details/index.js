import "./index.scss";
import {useState} from "react";
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";

export default function OrgProfileDetails(){
const [orgName, setOrgName]= useState("ABC Toys");
const [orgCRA, setOrgCRA]= useState("ORG CRA");
const [orgDesc, setOrgDesc]= useState("Org Desc");
function changeOrgName(event)
{
    setOrgName(event.target.value);
}
function changeOrgCRA(event)
{
    setOrgCRA(event.target.value);
}
// function changeOrgDesc(event)
// {
//     setOrgDesc(event.target.value);
// }
function saveData(e)
{
    e.preventDefault();
    let formObject={
        org_name:orgName,
        orgCRA:orgCRA,
        orgDesc:orgDesc
    }
    sendData(formObject);
    console.log(formObject);
}
function sendData(obj)
{
  FireBaseFirestoreService.createDocument("organization_profile",obj);
}
    return(
        <div className="OrgProfileDetails">
            <form className="Details" onSubmit={saveData}>
                <label htmlFor="orgName">Organization Name</label><br />
                <input 
                    type="text" 
                    id="orgName" 
                    value={orgName}
                    onChange = {changeOrgName}
                    required /><br />
                <p>{orgName}</p>
                <label htmlFor="orgDescription">Organization Description</label><br />
                <textarea id="orgDescription" name="orgDescription" rows="4" cols="50" maxLength="250" 
                value={orgDesc}
                 onChange = {(e)=>{setOrgDesc(e.target.value); console.log(e);}}
                required></textarea><br />
    
                <label htmlFor="orgCRA">CRA Registered Charity</label><br />
                <input type="text" id="orgCRA" 
                 value={orgCRA}
                 onChange = {changeOrgCRA} name="orgCRA" pattern="[a-zA-Z0-9]{1,15}" required /><br />
                 <p>{orgCRA}</p>
    
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
                <button type="submit">Save</button>
            </form>
        </div>
)
}

