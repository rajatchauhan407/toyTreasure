import "./index.scss";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
// import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "../../FirebaseConfig";
import AuthContext from "../../services/auth-context";



export default function CardOrgTT13() {
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

  const navigate = useNavigate();

  // const statusMapping = {
  //   cancelled: "Cancelled",
  //   completed: "Completed",
  //   pending: "Pending",
  // };

  // const deliveryMethodMapping = {
  //   drop_off: "Drop-off",
  //   pickup: "Pick-up",
  // };

  // const getStatusText = (statusObj) => {
  //   if (!statusObj) {
  //     return "N/A";
  //   }

  //   const trueStatus = Object.keys(statusObj).find((key) => statusObj[key]);
  //   return statusMapping[trueStatus] || "N/A";
  // };

  // const getDeliveryMethodText = (methodObj) => {
  //   if (!methodObj) {
  //     return "N/A";
  //   }

  //   const trueMethod = Object.keys(methodObj).find((key) => methodObj[key]);
  //   return deliveryMethodMapping[trueMethod] || "N/A";
  // };

  // const formatDate = (timestamp) => {
  //   if (!timestamp) {
  //     return "N/A";
  //   }
  //   const dateObj = timestamp.toDate();
  //   const options = { month: 'long', day: 'numeric', year: 'numeric' };
  //   return dateObj.toLocaleDateString(undefined, options);
  // };

  return (
    <div>
    <table className="TableCardOrgTT13">
        <thead>
          <tr>
            <th>Order no.</th>
            <th>Donor Name</th>
            <th>Delivery</th>
            <th>Date</th>
            <th>Qty</th>
            <th>Donation Status</th>
            <th>Action</th>
          </tr>
        </thead>


      
        <tbody className="tbodyOrgVerificationPendingDonor">
        {orgVerificationList.map((props,index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{props?.data().donorName}</td>
            <td>{props?.data().deliveryMethod}</td>
            <td>{props?.data().date}</td>
            <td>{props?.data().toysQuantity}</td>
            <td>{props?.data().donationStatus}</td>
            <td>
            <button className="verifyButtonPendingDonation" disabled={props?.data().donationStatus === "completed"} onClick={() => { navigate('/organization/verification/'+props.id) }}>
                Verify
                </button>
            </td>
            </tr>
           
        ))}
        </tbody>
    </table>
    </div>
  );
}
