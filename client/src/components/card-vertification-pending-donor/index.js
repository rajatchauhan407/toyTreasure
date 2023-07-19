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

  const statusMapping = {
    cancelled: "Cancelled",
    completed: "Completed",
    pending: "Pending",
  };

  const deliveryMethodMapping = {
    drop_off: "Drop-off",
    pickup: "Pick-up",
  };

  const getStatusText = (statusObj) => {
    if (!statusObj) {
      return "N/A";
    }

    const trueStatus = Object.keys(statusObj).find((key) => statusObj[key]);
    return statusMapping[trueStatus] || "N/A";
  };

  const getDeliveryMethodText = (methodObj) => {
    if (!methodObj) {
      return "N/A";
    }

    const trueMethod = Object.keys(methodObj).find((key) => methodObj[key]);
    return deliveryMethodMapping[trueMethod] || "N/A";
  };

  const formatDate = (timestamp) => {
    if (!timestamp) {
      return "N/A";
    }
    const dateObj = timestamp.toDate();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return dateObj.toLocaleDateString(undefined, options);
  };

  return (
    <table className="TableCardOrgTT13">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Donor Name</th>
            <th>Method</th>
            <th>Date</th>
            <th>Qty</th>
            <th>Donation Status</th>
            <th>Action</th>
          </tr>
        </thead>


      
        <tbody className="tbodyOrgVerificationPendingDonor">
        {orgVerificationList.map((props) => (
            <tr key={props.id}>
              
            <td>{props?.order}</td>
            <td>{props?.name}</td>
            <td>{getDeliveryMethodText(props?.user_donation_delivery_method)}</td>
            <td>{formatDate(props?.user_donation_date)}</td>
            <td>{props?.user_donation_list ? props.user_donation_list.length : 0}</td>
            <td>{getStatusText(props?.user_donation_status)}</td>
            <td>
                <button disabled={props?.data().verificationStatus === true} onClick={() => { navigate('/organization/verification/'+props.id) }}>

                Verify
                </button>
            </td>
            
            </tr>
           
        ))}
        </tbody>
    </table>
  );
}
