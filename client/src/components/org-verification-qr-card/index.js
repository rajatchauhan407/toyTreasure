import "./index.scss";

export default function OrgVerificationQRCard(props)
{
    
    return(  
        <div className="OrgVerQRCardWrapper">                            
            <div className="org-ver-qr-card">
               <h4>QR Code</h4>
                <p>Show below QR Code to the donor to redeem points.</p>
                <div className="orgVerQRMessage">
                    <h3>QR Code for donor will be generated after verification</h3>
                </div>
            </div>              
        </div>    
    )
}

