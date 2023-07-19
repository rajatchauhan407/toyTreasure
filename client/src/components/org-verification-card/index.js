import "./index.scss";
// import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
// import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "../../FirebaseConfig";
import AuthContext from "../../services/auth-context";
import { Link } from "react-router-dom";
// import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
export default function OrgVerificationCard(){

    const [orgVerificationList, setOrgVerificationList] = useState([]);
  const authCtx = useContext(AuthContext);
  async function getOrgVerificationListData() {
    try {
      console.log(authCtx);
      let orgRef = collection(database,'organization_profile');
      let qOrg = query(orgRef, where("uid","==",authCtx.uid));
      // console.log("is it being called")
      const data = await getDocs(qOrg);
      let orgId = data?.docs[0].id;
      // console.log(orgId)
      let userDonationRef = collection(database,'user_donations');
      let qUser = query(userDonationRef, where("orgId","==",orgId));
      let donationData = await getDocs(qUser);
      console.log(donationData.docs);
      setOrgVerificationList(donationData.docs || []);
      // donationData.forEach((el)=>{
      //   console.log(el.data())
      // })
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {

    getOrgVerificationListData();
  }, [setOrgVerificationList]);
    let orgVerificationData = [
        {
            animalType:"Stuffed Animal",
            date:"23-05-89",
            name:"Greg Thomas"
        },
        {
            animalType:"Stuffed Animal",
            date:"23-05-89",
            name:"Greg Thomas"
        },
        {
            animalType:"Stuffed Animal",
            date:"23-05-89",
            name:"Greg Thomas"
        },
        {
            animalType:"Stuffed Animal",
            date:"23-05-89",
            name:"Greg Thomas"
        }
    ];
    return (
            orgVerificationList.map((el)=>{
                return <div className="verification-card-wrapper">
                    <h4>{el.data().donorName}</h4>
                    <div className="verification-date-button">
                        <p>{el.data().date} - From wishlist</p>
                        <button>
                        <Link to={`/organization/verification/${el.id}`}>
                            Verify
                        </Link>
                        </button>
                    </div>
                    <div className="icon-author">
                        <i className="fa-solid fa-user"></i>
                        <p>{el.data().donationStatus}</p>
                    </div> 
                </div>
            })
    )
}
