import "./index.scss";
import qr from './qr-code-temp.jpg';

export default function OrgVerificationQRActive(props)
{
    
    return(  
        <div className="OrgVerQRCardWrapper">                
            <div className="org-ver-qr-active">
                    <h2>QR Code</h2>
                    <p>Share the QR Code with the donor to redeem points</p>
                    <img src={qr} alt=""/>
            </div>          
        </div>    
    )
}
