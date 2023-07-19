import "./index.scss";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";

const verificationData = [
    {
      orderNumber: 37890,
      name: "Greg Thomas",
      method: "drop-off",
      date: "05/05/2023",
      Qty: 6,
      donationStatus: "Pending"
    },
  ];

export default function CardOrgTT13() {
  const [orgVerificationList, setOrgVerificationList] = useState([]);

  useEffect(() => {
    async function getOrgVerificationListData() {
      try {
        const data = await FireBaseFirestoreService.getDocumentsInArray("user_donations");
        setOrgVerificationList(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getOrgVerificationListData();
  }, []);

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
            <th>Name</th>
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
                <button className="verifyButtonPendingDonation" onClick={() => { navigate('/organization/verification/3') }}>
                Verify
                </button>
            </td>
            
            </tr>
           
        ))}
        </tbody>
    </table>
  );
}
