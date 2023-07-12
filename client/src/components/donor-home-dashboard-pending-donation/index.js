import './index.scss';
import { useEffect, useState, useRef } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";

export default function DashboardPendingDonation() {
  const [donorPendingDonation, setPendingDonation] = useState([]);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);

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

  const handleScanQRCode = () => {
    setIsCameraOpen(true);

    // Access the camera using getUserMedia
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
        setIsCameraOpen(false);
      });
  };

  const handleStopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream && stream.getTracks();
    if (tracks) {
      tracks.forEach((track) => track.stop());
    }
    setIsCameraOpen(false);
  };

  return (
    <div className='tt-72-DashboardPendingDonationWrapper'>
      <div className="tt-72-DashboardPendingDonation">
        <h3>You have a Pending Donation</h3>
        {donorPendingDonation.map((donation, index) => (
          <div key={index}>
            <h3>{donation.org_name}</h3>
            <p>{formatDate(donation.user_donation_date)}</p>
          </div>
        ))}
        <input
          type="button"
          value="Scan QR Code"
          id="tt72scanQR"
          className="tt72scanQR"
          onClick={handleScanQRCode}
        />
        {isCameraOpen && (
          <div>
            <video ref={videoRef} autoPlay />
            <button onClick={handleStopCamera}>Stop Camera</button>
          </div>
        )}
      </div>
    </div>
  );
}
