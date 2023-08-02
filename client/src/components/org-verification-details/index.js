import "./index.scss";
import gift from "./gift.svg";
import crown from "./crown.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
export default function OrgVerificationDetails(props)
{
    const [donationData, setDonationData] = useState({});
    const [donorEmail, setDonorEmail] = useState("");
    const {donationId} = useParams();
    const[wishlist, setWishlist] = useState([]);
    const [categories, setCategories] = useState([]);
    const [verificationId, setVerificationId] = useState("verificationId");
    console.log(donationId);
    useEffect(()=>{
        async function getDonationData(){
            try{
                const data = await FireBaseFirestoreService.getDocumentById('user_donations',donationId);
                setDonationData(data.data());
                console.log(data.data().wishlist)
                const donorData = await FireBaseFirestoreService.getDocumentById('user',data.data().donorUID)
                
                setDonorEmail(donorData.data().email);
                setWishlist(data.data().wishlist);
                setCategories(data.data().categories);
                setVerificationId(data.data().verificationId);
            }catch(error){
                console.log(error)
            }
        }
        getDonationData();
        // console.log(donationData.wishlist.map((el)=>{console.log(el);}));
    },[])
    async function handleAccept(){
        try{
            await FireBaseFirestoreService.updateDocumentById('user_donations',donationId,{donationStatus:"completed"});
            props.onAccept(verificationId);
        }catch(error){
            console.log(error);
        }
        

    }
  
    let wishListIcon="";
    // const verToyList = [
    //     {fromWishlist:"y",name:"Teddy Bear 1", amount:1,points:50},
    //     {fromWishlist:"n",name:"Teddy Bear 2", amount:1,points:50},
    //     {fromWishlist:"n",name:"Barbie Doll 1", amount:1,points:25}
    // ]
    // const donorDetails = [
    //     {donationId:"#45634", donorName:"Greg Thomas",donorPhone:"+1 673 564 7823",dateAndTime:"May 30, 2023, 11:30pm"}       
    // ]
    return(      
        <div className="OrgVerDetailsCardWrapper">
            <div className="org-ver-details-card">
                <div className="detailsHeader">
                    <h4>Donation Request</h4>
                    <p>Donation: #{donationId}</p>
                </div>
                <div className="details">
                    <img className="gift" src={gift} alt={"gift"}/>
                    <div className="donorInfo">
                        <div className="displayDonorInfo">
                            <p className="dTitle">Donor Name</p>
                            <p className="dInfo">{donationData.donorName}</p>
                        </div>
                        <div className="displayDonorInfo">
                            <p className="dTitle">Donor Email</p>
                            <p className="dEmail">{donorEmail}</p>
                        </div>
                        <div className="displayDonorInfo">
                            <p className="dTitle">Date</p>
                            <p className="dDate">{donationData.date} 
                            {/* <i class="fa-sharp fa-light fa-triangle-exclamation dTitle"></i> */}
                            </p>
                        </div>
                    </div>
                </div>
                <table className="org-verification-details-table">
                    <thead>
                    <tr>
                        <th className="crownIcon"></th>
                        <th>Toy Name</th>
                        <th>Amount</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        wishlist.map((el,index)=>{                                               
                            wishListIcon=<img className="org-ver-details-crownIcon" src={crown} alt={"crown"}/>           
                        
                        
              
                        return <tr>        
                        <td className="crownIcon">{wishListIcon}</td>       
                        <td>{el.org_w_toy_name}</td>
                        <td>{el.quantity}</td> 
                        <td>{el.org_w_toy_points * el.quantity}</td>
                        </tr>
                        }) 
                    }
                    {
                        categories.map((el,index)=>{                                               
                            wishListIcon=<img className="org-ver-details-crownIcon" src={crown} alt={"crown"}/>           
                        
                        
              
                        return <tr>        
                        <td className="crownIcon"></td>       
                        <td>{el.category_name}</td>
                        <td>{el.quantity}</td> 
                        <td>{el.category_points * el.quantity}</td>
                        </tr>
                        }) 
                    }
                        <tr className="totalPoints">
                        <td className="crownIcon"></td>
                        <td>Total Points</td>
                        <td>{donationData.toysQuantity}</td>
                        <td>{donationData.user_points}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="verificationCheckBox">                
                    <input type="checkbox" id="toysChecked"  name="toysChecked" className="verificationCheckBoxInput" />
                    <label for="toysChecked">Donated toys has been thoroughly checked before proceeding for the donation.
                    </label>
                </div>
                <div className="orgVerButtons">
                    <input type="Button" value="Cancel"  id="cancelDonation"  className="orgVerButtonCancel"/>
                    <input type="Button" value="Accept"  id="acceptDonation"  className="orgVerButtonAccept" onClick={handleAccept}/>
                </div>                
            </div>           
        </div>
    )
}

