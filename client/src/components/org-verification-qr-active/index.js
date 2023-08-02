import "./index.scss";
// import qr from './qr-code-temp.jpg';
import QRCode from "react-qr-code";
import { Link } from 'react-router-dom';


export default function OrgVerificationQRActive(props)
{
    
    return(  
        <div className="OrgVerQRCardWrapperActive">            
                <div className="orgVerQRText">
                    <h4>QR Code</h4>
                    <p>Show the QR Code below to the donor to redeem points.</p>
                </div>
                <div className="org-ver-qr-active">
                    {/* <img className="orgVerQRImg" src={qr} alt=""/>
                                         */}
                    <QRCode value={props.qrCode} />                   
                    <div className="OrgVerQRCardButton">
                        <button className="orgVerGotoDashboard"><Link to="/organization/dashboard">Go to Dashboard</Link></button>                    </div>
                </div>          
        </div>    

        
    )
}
