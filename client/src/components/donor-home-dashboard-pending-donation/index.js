import './index.scss';
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect, useState, useRef, useContext } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
import AuthContext from '../../services/auth-context';


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
            throw "qrCodeSuccessCallback is required callback.";
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



function filterResults (results) {
  let filteredResults = [];
  for (var i = 0; i < results.length; ++i) {
      if (i === 0) {
          filteredResults.push(results[i]);
          continue;
      }

      if (results[i].decodedText !== results[i - 1].decodedText) {
          filteredResults.push(results[i]);
      }
  }
  return filteredResults;
}

const ResultContainerTable = ({ data }) => {
  const results = filterResults(data);
  return (
      <table className={'Qrcode-result-table'}>
          <thead>
              <tr>
                  <td>#</td>
                  <td>Decoded Text</td>
                  <td>Format</td>
              </tr>
          </thead>
          <tbody>
              {
                  results.map((result, i) => {
                      console.log(result);
                      return (<tr key={i}>
                          <td>{i}</td>
                          <td>{result.decodedText}</td>
                          <td>{result.result.format.formatName}</td>
                      </tr>);
                  })
              }
          </tbody>
      </table>
  );
};

const ResultContainerPlugin = (props) => {
  const results = filterResults(props.results);
  return (
      <div className='Result-container'>
          <div className='Result-header'>Scanned results ({results.length})</div>
          <div className='Result-section'>
              <ResultContainerTable data={results} />
          </div>
      </div>
  );
};


export default function DashboardPendingDonation(props) {
  const [donorPendingDonation, setPendingDonation] = useState([]);

  const authCtx = useContext(AuthContext);
  const [decodedResults, setDecodedResults] = useState([]);
  const [verificationId, setVerificationId] = useState("");
    const onNewScanResult = (decodedText, decodedResult) => {
        
        setDecodedResults(decodedText);
    };

  useEffect(() => {
    async function getPendingDonationData() {
      try {
        const data = await FireBaseFirestoreService.getDocumentsInArray("user_donations");
        const pendingDonations = data.filter((donation) => donation.user_donations.donationStatus.pending === true);
        setPendingDonation(pendingDonations || []);
        console.log(pendingDonations);
      } catch (error) {
        console.error("Error fetching data:", error);
   
    setVerificationId(decodedResults);
    
  }, [decodedResults]);

  useEffect(()=>{
    async function checkVerification(){
      console.log("id: "+verificationId);
      console.log("props: "+props.donations.verificationId);
      if(verificationId === props.donations.verificationId){
        console.log("verified");
        try{
          await FireBaseFirestoreService.updateDocumentById("user_donations",props.donations.id,{verificationStatus:true});
        }catch(error){
          console.log("Error: "+error);
        }
        

      }
    }
    checkVerification();
    
  },[verificationId])
  // const formatDate = (timestamp) => {
  //   const dateObj = timestamp.toDate();
  //   const options = { month: 'long', day: 'numeric', year: 'numeric' };
  //   return dateObj.toLocaleDateString(undefined, options);
  // };

  // const handleScanQRCode = async () => {
  //   // setIsCameraOpen(true);
  //   const codeReader = new BarcodeReader();
   
  // };

  return (
    <div className='tt-72-DashboardPendingDonationWrapper'>
      <div className="tt-72-DashboardPendingDonation">
        <h3>You have a Pending Donation</h3>
        
        {/* <video ref={videoRef} width="640" height="480" />
        <input
          type="button"
          value="Scan QR Code"
          id="tt72scanQR"
          className="tt72scanQR"
          onClick={handleScanQRCode}
        /> */}
        <div>
        <Html5QrcodePlugin
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
        {/* <ResultContainerPlugin results={decodedResults} /> */}
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
