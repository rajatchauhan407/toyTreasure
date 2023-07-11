import "./index.scss";
import { useState,useEffect } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";

export default function OrgVerificationCard(){
    const [orgVerificationList, setOrgVerificationList] = useState([]); 
        async function getOrgVerificationListData()
        {
            const data = await FireBaseFirestoreService.getDocumentsInArray("user_donations");
            let array = data;       
            setOrgVerificationList(array);       
        }
        useEffect(()=>{
            getOrgVerificationListData();
        },[]);


    // let orgVerificationData = [
    //     {
    //         animalType:"Stuffed Animal",
    //         date:"23-05-89",
    //         name:"Greg Thomas"
    //     },
    //     {
    //         animalType:"Stuffed Animal",
    //         date:"23-05-89",
    //         name:"Greg Thomas"
    //     },
    //     {
    //         animalType:"Stuffed Animal",
    //         date:"23-05-89",
    //         name:"Greg Thomas"
    //     },
    //     {
    //         animalType:"Stuffed Animal",
    //         date:"23-05-89",
    //         name:"Greg Thomas"
    //     }
    // ];
    return (
            orgVerificationList.map((el)=>{
                return <div className="verification-card-wrapper">
                    <h4>{el.animalType}</h4>
                    <div className="verification-date-button">
                        <p>{el.date} - From wishlist</p>
                        <button>
                            Verify
                        </button>
                    </div>
                    <div className="icon-author">
                        <i className="fa-solid fa-user"></i>
                        <p>{el.name}</p>
                    </div> 
                </div>
            })
    )
}
