import {useState} from "react";
import './index.scss';
// import OrgVerificationCard from '../../../../components/org-verification-card';
import OrgVerificationQRCard from '../../../../components/org-verification-qr-card';
import OrgVerificationDetails from '../../../../components/org-verification-details';
import OrgVerificationQRActive from "../../../../components/org-verification-qr-active";
export default function OrgVerificationRequest(props){
    const [flag, setFlag] = useState(false);
    const [verificationId, setVerificationId] = useState("verificationId");
    return(
        <div className='org-verification-request-container'>
        <div className="org-verification-container">
        <OrgVerificationDetails onAccept={(data)=>{setFlag(true); setVerificationId(data)}}/>
        </div>
        <div className="org-verify-card-container">
        {
            !flag?<OrgVerificationQRCard/>:<OrgVerificationQRActive qrCode={verificationId}/>
        }
        </div>
        </div>
    )
}