import './index.scss';
import { useEffect, useState, useRef, useContext } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
import AuthContext from '../../services/auth-context';
import { BarcodeReader } from '@zxing/library';
export default function DashboardPendingDonation(props) {
  const [donorPendingDonation, setPendingDonation] = useState([]);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const authCtx = useContext(AuthContext);
  const [scannedData, setScannedData] = useState('');

  useEffect(() => {
    console.log(props.donations);
    // async function getPendingDonationData() {
    //   try {
    //     const data = await FireBaseFirestoreService.getDocumentsInArray("user_donations");
    //     const pendingDonations = data.filter((donation) => donation.donorUID === authCtx.uid);
    //     setPendingDonation(pendingDonations || []);
    //     console.log(pendingDonations);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // }

    // getPendingDonationData();
  }, []);

  // const formatDate = (timestamp) => {
  //   const dateObj = timestamp.toDate();
  //   const options = { month: 'long', day: 'numeric', year: 'numeric' };
  //   return dateObj.toLocaleDateString(undefined, options);
  // };

  // const handleScanQRCode = async () => {
  //   // setIsCameraOpen(true);
  //   const codeReader = new BarcodeReader();
   
  // };

  const handleScanQRCode = async () => {
    try{
      const codeReader = new BarcodeReader();
      const videoElement = videoRef.current;
      const constraints = {video:{facingMode:"environment"}};
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoElement.srcObject = stream;
      const result = await codeReader.decodeOnceFromVideoDevice(undefined, videoElement)
      setScannedData(result.getText())
        
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
    

  };

  return (
    <div className='tt-72-DashboardPendingDonationWrapper'>
      <div className="tt-72-DashboardPendingDonation">
        <h3>You have a Pending Donation</h3>
        {donorPendingDonation.map((donation, index) => (
          <div key={index}>
            <h3>{donation.org_name}</h3>
            {/* <p>{formatDate(donation.user_donation_date)}</p> */}
          </div>
        ))}
        <video ref={videoRef} width="640" height="480" />
        <input
          type="button"
          value="Scan QR Code"
          id="tt72scanQR"
          className="tt72scanQR"
          onClick={handleScanQRCode}
        />
        <div>
          <p>{scannedData}</p>
    </div>
        {/* {isCameraOpen && (
          <div>
            <video ref={videoRef} autoPlay />
            <button onClick={handleStopCamera}>Stop Camera</button>
          </div>
        )} */}
      </div>
    </div>
  );
}
