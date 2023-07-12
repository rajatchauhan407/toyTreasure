import './index.scss';
import { useEffect, useState } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";

// const tt72pendingDonation = [
//     {pending:"one",dateandtime:"June 18th, 2023 (2:00 pm - 4:00 pm)"}
// ]

export default function DashboardPendingDonation() {
    const [donorPendingDonation, setPendingDonation] = useState([]);
  
    useEffect(() => {
      async function getPendingDonationData() {
        try {
          const data = await FireBaseFirestoreService.getDocumentsInArray("user_donations");
          const pendingDonations = data.filter((donation) => donation.user_donation_status.pending === true);
          setPendingDonation(pendingDonations || []);
          console.log(pendingDonations);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      getPendingDonationData();
    }, []);
  
    const formatDate = (timestamp) => {
      const dateObj = timestamp.toDate();
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      return dateObj.toLocaleDateString(undefined, options);
    };
  
    return (
      <div className='tt-72-DashboardPendingDonationWrapper'>
        <div className="tt-72-DashboardPendingDonation">
          <h3>You have a Pending Donation</h3>
          {donorPendingDonation.map((donation, index) => (
            <div key={index}>
              <h3>{donation.org_name}</h3>
              <p>{formatDate(donation.user_donation_date)}</p> {/* Convert Timestamp to a renderable format */}
            </div>
          ))}
          <input type="button" value="Scan QR Code" id="tt72scanQR" className="tt72scanQR" />
        </div>
      </div>
    );
  }
  
  