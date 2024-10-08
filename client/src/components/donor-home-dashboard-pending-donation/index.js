/* eslint-disable react-hooks/exhaustive-deps */
import './index.scss';
import { Html5QrcodeScanner} from 'html5-qrcode'
import { useEffect, useState} from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
// import AuthContext from '../../services/auth-context';
import DonorPointsModal from '../donor-points-awarded-modal';
import GeneralModalWrapper from '../general-modal-wrapper';
// import FireBaseAuthService from '../../services/FirebaseAuthService';
const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
    let config = {};
    if (props.fps) {
        config.fps = props.fps;
    }
    if (props.qrbox) {
        config.qrbox = props.qrbox;
    }
    if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
    }
    return config;
};

const Html5QrcodePlugin = (props) => {

    useEffect(() => {
        // when component mounts
        
        const config = createConfig(props);
        const verbose = props.verbose === true;
        // Suceess callback is required.
        if (!(props.qrCodeSuccessCallback)) {
            console.error("qrCodeSuccessCallback is required callback.");
        }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);
        // cleanup function when component will unmount
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, []);

    return (
        <div id={qrcodeRegionId} />
    );
};



// function filterResults (results) {
//   let filteredResults = [];
//   for (var i = 0; i < results.length; ++i) {
//       if (i === 0) {
//           filteredResults.push(results[i]);
//           continue;
//       }

//       if (results[i].decodedText !== results[i - 1].decodedText) {
//           filteredResults.push(results[i]);
//       }
//   }
//   return filteredResults;
// }

// const ResultContainerTable = ({ data }) => {
//   const results = filterResults(data);
//   return (
//       <table className={'Qrcode-result-table'}>
//           <thead>
//               <tr>
//                   <td>#</td>
//                   <td>Decoded Text</td>
//                   <td>Format</td>
//               </tr>
//           </thead>
//           <tbody>
//               {
//                   results.map((result, i) => {
//                       console.log(result);
//                       return (<tr key={i}>
//                           <td>{i}</td>
//                           <td>{result.decodedText}</td>
//                           <td>{result.result.format.formatName}</td>
//                       </tr>);
//                   })
//               }
//           </tbody>
//       </table>
//   );
// };


export default function DashboardPendingDonation(props) {
  // const [donorPendingDonation, setPendingDonation] = useState([]);

  // const authCtx = useContext(AuthContext);
  const [decodedResults, setDecodedResults] = useState([]);
  const [verificationId, setVerificationId] = useState("");
  const [scanner, setScanner] = useState(false);
  const [orgName, setOrgName] = useState("");
    const onNewScanResult = (decodedText, decodedResult) => {
        
        setDecodedResults(decodedText);
    };
  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    setScanner(false);
    setVerificationId(decodedResults);
    
  }, [decodedResults]);

  useEffect(()=>{
    async function fetchOrg(){
      try{
        const res = await FireBaseFirestoreService.getDocumentById("organization_profile",props.donations.orgId);
        console.log(res.data().profileDetails.org_name);
        setOrgName(res.data().profileDetails.org_name);
      }catch(error){
        console.log("Error: "+error);
      }
    };
    fetchOrg();
    async function checkVerification(){
      console.log("id: "+verificationId);
      console.log("props: "+props.donations.verificationId);
      if(verificationId === props.donations.verificationId){
        console.log("verified");
        try{
          // updating the status of the donation to true
          await FireBaseFirestoreService.updateDocumentById("user_donations",props.donations.id,{verificationStatus:true});
          
          // getting the user points
          const userPoints = await FireBaseFirestoreService.getDocumentById("user",props.donations.donorUID);
          
          // updating the user points in user collection
          await FireBaseFirestoreService.updateDocumentById("user",props.donations.donorUID,{user_points:props.donations.user_points+userPoints.data().user_points});
          window.scrollTo(0, 0);
          // updating the status of Modal to be true
          setOpenModal(true);
        }
        catch(error){
          console.log("Error: "+error);
        }
        
      }
    }
    checkVerification();
    
  },[verificationId])
  
  return (
    <div className='tt-72-DashboardPendingDonationWrapper'>
      <div className="tt-72-DashboardPendingDonation">
        <h3>You have a Pending Donation</h3>
        <h4>{orgName}</h4>
        <p>Date of Donation: {props.donations.date}</p>
        {!scanner && <button onClick={()=>{setScanner(true)}}>Scan QR code</button>}
        
        {/* <video ref={videoRef} width="640" height="480" />
        <input
          type="button"
          value="Scan QR Code"
          id="tt72scanQR"
          className="tt72scanQR"
          onClick={handleScanQRCode}
        /> */}
        <div>
        {scanner && <Html5QrcodePlugin
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                    shouldPauseAfterScan={true}
                />}
            {/* <ResultContainerPlugin results={decodedResults} /> */}
        </div>
        {
          openModal && 
          <GeneralModalWrapper onCloseModal={(data)=>{setOpenModal(data)}}>
          <DonorPointsModal 
              points={props.donations.user_points}
          />
          </GeneralModalWrapper>
        }
      </div>
    </div>
    );
}