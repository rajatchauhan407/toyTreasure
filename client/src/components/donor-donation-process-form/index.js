import { useContext } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import AuthContext from "../../services/auth-context";
import { useState,useEffect } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';

export default function DonorDonationProcessForm(props)
{
    function handleAccept(){
        props.onAccept(true);
    }
    const [orgDeliveryDetails, setOrgDeliveryDetails] = useState([]); 
    async function getOrgDeliveryDetails()
    {

        try {
            const data = await FireBaseFirestoreService.getDocumentsInArray("organization_profile");
            setOrgDeliveryDetails(data || []);
            console.log("delivery details>>> "+orgDeliveryDetails.extraDetails)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
       
    }
    useEffect(()=>{
        getOrgDeliveryDetails();
    },[]);
   let authCtx=useContext(AuthContext);
   const donorDetails_tt81 = [
        {donorName:authCtx.displayName,donorEmail:authCtx.email}       
    ]
    return( 
        <form className="tt-81-donationForm">   
            <div className="tt-81-donationFormCardWrapper">               
                <h2>Donation Details</h2>                  
                    <div className="tt-81-donor-details"> 
                        <div className="tt-81-donor-details-header">
                            <h4>Donor Details</h4>   
                            <Link to="#">Edit</Link>
                        </div>
                        <p>Name: {donorDetails_tt81[0].donorName}</p>
                        <p>Email: {donorDetails_tt81[0].donorEmail}</p>
                    </div>
                    <div className="tt-81-delivery-method"> 
                        <h3>Delivery Method</h3>
                        <div className="tt-81-inputs">
                            <input type="radio" value="tt-81-dropOff" id="tt-81-dropOff" name="tt-81-delivery-method" /> <label for="tt-81-dropOff"><i class="fa-solid fa-van-shuttle"></i> Drop Off</label>
                            <input type="radio" value="tt-81-pickUp" id="tt-81-pickUp" name="tt-81-delivery-method" /> <label for="tt-81-pickUp"><i class="fa fa-shopping-basket" aria-hidden="true"></i> Pickup</label>                        
                        </div>   
                    </div>
                    <div className="tt-81-dateandtime"> 
                        <h3>Date and Time</h3>     
                        <div className="tt-81-inputs">                  
                            <input type="date" id="tt-81-date" name="tt-81-date"></input>  
                            <label for="tt-81-date">Select date</label>                        
                            <input type="time" id="tt-81-time" name="tt-81-time"></input>
                            <label for="tt-81-time">Select time</label>
                        </div> 
                    </div>
                    <div className="tt-81-donation-instruction"> 
                        <h3>Donation Instruction</h3> 
                        <p><i className="fa-solid fa-pump-soap"></i> Clean, wash (if applicable) and sanitize the toys.</p>
                        <p><i className="fa-solid fa-ban-smoking"></i> We only accept toys from smoke and pet free homes.</p>
                        <p>Please visit toystreasure.ca/donation-guideline for more info.</p>
                    </div>
                
                    <div className="tt-81-checkboxes"> 
                        <label className="tt-81-remind-me-label">
                            <input type="checkbox" id="tt-81-remind-me"  name="tt-81-remind-me"  />
                            Remind me to drop-off/pick-up donation via Text Message.
                        </label>
                        <label className="tt-81-confirm-details-label">
                            <input type="checkbox" id="tt-81-confirm-details"  name="tt-81-confirm-details"  />
                            I hereby confirm that all the details are correct and follow guidelines for donation.
                        </label>
                    </div>
                    <div className="tt-81-buttons">                   
                        <input type="Button" value="Confirm to Donate"  id="tt-81-confirm"  className="tt-81-confirm"/>
                    </div>                
                        
            </div>
        </form>  
    )
}

