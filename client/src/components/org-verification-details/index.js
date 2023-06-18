import "./index.scss";


export default function OrgVerificationDetails(props)
{
    return(
        <div className="OrgVerificationDetailsWrapper">
            <div class="org-verification-details-card">
                <img className="site-logo" src={logo} alt={"siteLogo"}/>
            </div>  
            <div class="org-verification-qr-card">
                <p>Code will be generated after verification</p>
            </div>                  
               
        </div>
    )
}

