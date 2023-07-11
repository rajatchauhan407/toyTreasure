import "./index.scss";
import basket from "./basket.png";
import { useEffect, useState, useRef } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';


export default function OrgVerificationDetails(props)
{
    const [verToyList, setVerToyList] = useState([]);
    const [donorDetails, setDonorDetails] = useState([]);

    async function getData(){
    const toyListData = await FireBaseFirestoreService.getDocumentsInArray("donation_list");
    let array = toyListData;
    setVerToyList(array);

    }
    useEffect(()=> {
        getData();
    }, [verToyList]);

    function handleAccept(){
        props.onAccept(true);
    }
    let sumOfAmt=0;
    let sumOfPoints=0;
    let wishListIcon="";

    return(      
        <div className="OrgVerDetailsCardWrapper">
            <div className="org-ver-details-card">
                <div className="detailsHeader">
                    <h2>Verification Details</h2>
                    <h3>Donation:  {donorDetails[0]?.donationId}</h3>
                </div>
                <div className="details">
                    <img className="basket" src={basket} alt={"basket"}/>
                    <div className="donorInfo">
                        <div className="displayDonorInfo">
                            <p className="dTitle">Donor Name</p>
                            <p className="dInfo">{donorDetails[0]?.donorName}</p>
                        </div>
                        <div className="displayDonorInfo">
                            <p className="dTitle">Donor Phone</p>
                            <p className="dInfo">{donorDetails[0]?.donorPhone}</p>
                        </div>
                        <div className="displayDonorInfo">
                            <p className="dTitle">Date and Time</p>
                            <p className="dInfo">{donorDetails[0]?.dateAndTime} <i class="fa-sharp fa-light fa-triangle-exclamation dTitle"></i></p>
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
                        verToyList.map((el,index)=>{                
                        sumOfAmt=sumOfAmt+el.amount;
                        sumOfPoints=sumOfPoints+el.points;                
                        if(el.fromWishlist==="y")
                        {
                            wishListIcon=<i class="fa-solid fa-crown"></i>;                   
                        }
                        else
                        {
                            wishListIcon="";
                        }
              
                        return <tr>        
                        <td className="crownIcon">{wishListIcon}</td>       
                        <td>{el.name}</td>
                        <td>{el.amount}</td> 
                        <td>{el.points}</td>
                        </tr>
                        }) 
                    }
                        <tr className="totalPoints">
                        <td className="crownIcon"></td>
                        <td>Total Points</td>
                        <td>{sumOfAmt}</td>
                        <td>{sumOfPoints}</td>
                        </tr>
                    </tbody>
                </table>
                <label>
                    <input type="checkbox" id="toysChecked"  name="toysChecked"  />
                    Donated toys has been thoroughly checked before 
                    proceeding for the donation.
                </label>
                <div className="orgVerButtons">
                    <input type="Button" value="Cancel Donation"  id="cancelDonation"  className="orgVerButtonCancel"/>
                    <input type="Button" value="Accept"  id="acceptDonation"  className="orgVerButtonAccept" onClick={handleAccept}/>
                </div>                
            </div>           
        </div>
    )
}

