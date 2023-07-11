import "./index.scss";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";

export default function CardOrgTT13() {
  const [orgVerificationList, setOrgVerificationList] = useState([]);

  async function getOrgVerificationListData() {
    try {
      const data = await FireBaseFirestoreService.getDocumentsInArray("user_donations");
      setOrgVerificationList(data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
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
    pickup: "Pick-Up",
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
    <tbody>
      {orgVerificationList.map((data) => (
        <tr key={data.id}>
          <td>{data.orderNumber}</td>
          <td>{data.name}</td>
          <td>{getDeliveryMethodText(data.method)}</td>
          <td>{formatDate(data.date)}</td>
          <td>{data.Qty}</td>
          <td>{getStatusText(data.donationStatus)}</td>
          <td>
            <button onClick={() => { navigate('/organization/verification/3') }}>
              Verify
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
