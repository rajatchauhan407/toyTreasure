import "./index.scss";
import { useState,useEffect, useCallback,useContext } from "react";
import AuthContext from "../../services/auth-context";
export default function OrgProfileDetails({getFormData,getDataState}){   
     let authCtx = useContext(AuthContext);
    const [orgName,setOrgName]=useState("");
    const [orgDescription,setOrgDescription]=useState("");
    const [orgCRA,setOrgCRA]=useState("");
    const [orgAddress1,setOrgAddress1]=useState("");
    const [orgCity,setOrgCity]=useState("");
    const [orgProvince,setOrgProvince]=useState("Alberta");
    const [orgAddress2,setOrgAddress2]=useState("");
    const [orgZip,setOrgZip]=useState("");
    const [orgCountry,setOrgCountry]=useState("Canada");
    const [orgEmail,setOrgEmail]=useState("");
    const [countryCode,setCountryCode]=useState("+1");
    const [phoneNumber,setPhoneNumber]=useState("");
    
  
    const getFormDataCallback = useCallback(getFormData,[getFormData]);
        useEffect(()=>{
            const formObject ={
                org_name:orgName,
                org_description:orgDescription,
                org_cra:orgCRA,
                org_address:orgAddress1,
                org_city:orgCity,
                org_province:orgProvince,
                org_address2:orgAddress2,
                org_zip:orgZip,
                org_country:orgCountry,
                org_email:authCtx.email,
                org_country_code:countryCode,
                org_phone:phoneNumber 
            }
            console.log(formObject);
            
                getFormData(formObject);
            
                
            
        },[orgName,orgDescription,orgCRA,orgAddress1,orgCity,orgProvince,orgAddress2,orgZip,orgCountry, orgEmail,countryCode,phoneNumber]);
   
        
  
    return(
        <div className="OrgProfileDetails">
            <form className="Details">
                <label htmlFor="orgName">Organization Name</label><br />               
                <input type="text" id="orgName" onChange={(e)=>{setOrgName(e.target.value)}} required /><br />
              
                <label htmlFor="orgDescription">Organization Description </label><br />
                <textarea id="orgDescription" onChange={(e)=>{setOrgDescription(e.target.value)}} name="orgDescription" rows="4" cols="50" maxLength="500" required></textarea><br />
               
                <label htmlFor="orgCRA">CRA Registered Charity</label><br />
                <input type="text" id="orgCRA" onChange={(e)=>{setOrgCRA(e.target.value)}} name="orgCRA" pattern="[a-zA-Z0-9]{1,15}" required /><br />
               
                <div className="one-line">
                    <div className="sect-1">
                        <label htmlFor="orgAddress1">Address Line 1</label><br />
                        <input type="text" id="orgAddress1" onChange={(e)=>{setOrgAddress1(e.target.value)}} name="orgAddress1" required /><br />

                        <label htmlFor="orgCity">City</label><br />
                        <input type="text" id="orgCity" onChange={(e)=>{setOrgCity(e.target.value)}} name="orgCity" required /><br />

                        <label htmlFor="orgProvince">Province</label><br />
                        <select id="orgProvince" onChange={(e)=>{setOrgProvince(e.target.value)}} name="orgProvince" required>
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
                        <input type="text" id="orgAddress2" onChange={(e)=>{setOrgAddress2(e.target.value)}} name="orgAddress2" required /><br />
            
                        <label htmlFor="orgZip">Zip Code</label><br />
                        <input type="text" id="orgZip"  onChange={(e)=>{setOrgZip(e.target.value)}} name="orgZip" required /><br />
            
                        <label htmlFor="orgCountry">Country</label><br />
                        <input type="text" id="orgCountry" onChange={(e)=>{setOrgCountry(e.target.value)}} name="orgCountry" value="Canada" disabled /><br />
                    </div>
                </div>
        
                <label htmlFor="orgEmail">Email</label><br />
                <input type="email" id="orgEmail" onChange={(e)=>{setOrgEmail(e.target.value)}} name="orgEmail" disabled ={true} value={authCtx.email} required /><br />
    
                <label htmlFor="contactNumber">Contact Number</label><br />
                <div className="phone-input">
                    <input type="text" id="countryCode" onChange={(e)=>{setCountryCode(e.target.value)}} name="countryCode" value="+1" disabled />
                    <input type="number" id="phoneNumber" onChange={(e)=>{setPhoneNumber(e.target.value)}} name="phoneNumber" required />
                </div>             
            </form>
           
        </div>
)
}

