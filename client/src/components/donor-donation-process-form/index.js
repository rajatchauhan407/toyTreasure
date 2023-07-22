import "./index.scss";
import { Link, useParams } from "react-router-dom";
import { useContext,useState} from "react";
import AuthContext from "../../services/auth-context";
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
import {nanoid} from "nanoid";

export default function DonorDonationProcessForm(props)
{
    // function handleAccept(){
    //     props.onAccept(true);
    // }
    const {id} = useParams();
    const authCtx = useContext(AuthContext);
    const [deliveryMethod, setDeliveryMethod] = useState("");
    const [date,setDate] = useState("");
    const [time, setTime] = useState(""); 
    const [confirm1,setConfirm1] = useState(false);
    const [confirm2,setConfirm2] = useState(false);

    async function storeDonationInDatabase(){
        // props.onFormClicked(true);
        const autoId = nanoid();
        console.log("New ID is here:"+autoId);
        const donation = {
            wishlist: authCtx.userCartData.wishlist,
            categories: authCtx.userCartData.categories,
            deliveryMethod:deliveryMethod,
            date:date,
            time:time,
            donorUID:authCtx.uid,
            donorName: authCtx.displayName,
            toysQuantity:authCtx.toysQuantity,
            user_points: authCtx.user_points,
            orgId:id,
            donationStatus:"pending",
            verificationStatus:false,
            verificationId:autoId,
        }
        console.log(donation);
        await FireBaseFirestoreService.createDocument('user_donations',donation);
        props.onFormClicked(true)
    }
    // console.dir(confirm1.current.checked);
    console.log(date);
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
                            <input type="radio" value="dropOff" id="tt-81-dropOff" name="tt-81-delivery-method" onClick={(e)=>{setDeliveryMethod(e.target.value)}}/> <label for="tt-81-dropOff"><i class="fa-solid fa-van-shuttle"></i> Drop Off</label>
                            <input type="radio" value="pickUp" id="tt-81-pickUp" name="tt-81-delivery-method" onClick={(e)=>{setDeliveryMethod(e.target.value)}}/> <label for="tt-81-pickUp"><i class="fa fa-shopping-basket" aria-hidden="true"></i> Pickup</label>                        
                        </div>   
                    </div>
                    <div className="tt-81-dateandtime"> 
                        <h3>Date and Time</h3>     
                        <div className="tt-81-inputs">                  
                            <input type="date" id="tt-81-date" value={date} name="tt-81-date" onChange={(e)=>{setDate(e.target.value)}}></input>  
                            <label for="tt-81-date">Select date</label>                        
                            <input type="time" id="tt-81-time" name="tt-81-time" value={time} onChange={(e)=>{setTime(e.target.value)}}></input>
                            <label for="tt-81-time">Select time</label>
                        </div> 
                    </div>
                    <div className="tt-81-donation-instruction"> 
                        <h3>Donation Instruction</h3> 
                        <p><i class="fa-solid fa-pump-soap"></i> Clean, wash (if applicable) and sanitize the toys.</p>
                        <p><i class="fa-solid fa-ban-smoking"></i> We only accept toys from smoke and pet free homes.</p>
                        <p>Please visit toystreasure.ca/donation-guideline for more info.</p>
                    </div>
                
                    <div className="tt-81-checkboxes"> 
                        <label class="tt-81-remind-me-label">
                            <input type="checkbox" id="tt-81-remind-me"  name="tt-81-remind-me" onChange={(e)=>{setConfirm1(e.target.checked)}}
                                checked={confirm1}
                            />
                            Remind me to drop-off/pick-up donation via Text Message.
                        </label>
                        <label class="tt-81-confirm-details-label">
                            <input type="checkbox" 
                                    id="tt-81-confirm-details" 
                                     name="tt-81-confirm-details" 
                                     onChange={(e)=>{setConfirm2(e.target.checked)}}
                                     checked={confirm2} />
                            I hereby confirm that all the details are correct and follow guidelines for donation.
                        </label>
                    </div>
                    <div className="tt-81-buttons">                   
                        <input 
                            type="Button" 
                            onClick={storeDonationInDatabase} 
                            value="Confirm to Donate"  
                            id="tt-81-confirm"  
                            className="tt-81-confirm"
                            disabled={!(confirm1 && confirm2)}
                            />
                    </div>                
                        
            </div>
        </form>  
    )
}

