import "./index.scss";
import qr from './qr-code-temp.jpg';

export default function OrgVerificationQRActive(props)
{
    
    return(  
        <div className="OrgVerQRCardWrapperActive">            
                <div className="orgVerQRText">
                    <h2>QR Code</h2>
                    <p>Show below QR Code to the donor to redeem points.</p>
                </div>
                <div className="org-ver-qr-active">
                    <img className="orgVerQRImg" src={qr} alt=""/>                    
                    <div className="OrgVerQRCardButton">
                        <input type="Button" value="Go to Dashboard"  id="gotoDashboard"  className="orgVerGotoDashboard"/>
                    </div>
                </div>          
        </div>    

        
    )
}
