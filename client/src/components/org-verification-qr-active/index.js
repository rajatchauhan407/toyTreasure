import "./index.scss";
// import qr from './qr-code-temp.jpg';
import QRCode from "react-qr-code";


export default function OrgVerificationQRActive(props)
{
    
    return(  
        <div className="OrgVerQRCardWrapperActive">            
                <div className="orgVerQRText">
                    <h2>QR Code</h2>
                    <p>Show below QR Code to the donor to redeem points.</p>
                </div>
                <div className="org-ver-qr-active">
                    {/* <img className="orgVerQRImg" src={qr} alt=""/>
                                         */}
                    <QRCode value={props.qrCode} />                   
                    <div className="OrgVerQRCardButton">
                        <input type="Button" value="Go to Dashboard"  id="gotoDashboard"  className="orgVerGotoDashboard"/>
                    </div>
                </div>          
        </div>    

        
    )
}
