import "./index.scss";
import logo from "./appLogo.svg"
import teamlogo from "./tech-tribe.png"

export default function DonorFooter(props)
{
    return(
        <div className="tt-47-donorFooterWrapper">
            <div className="tt-47-donor-image-wrapper">
                <img className="tt-47-site-logo" src={logo} alt={"siteLogo"}/>
                <div className="tt-47-address">
                    <p>
                        Vancouver BC, Canada
                    </p>
                    <p>
                        (670) 458 7500
                    </p>
                </div>
            </div> 
            <div className="tt-47-copyright">
                <p>
                    <span>Copyright &copy; 2023 TOYS TREASURE</span>
                </p>
                <p>
                    All rights reserved.
                </p>
            </div>
            <div className="tt-47-techTribe-logo">
                <p>
                    Powered by
                </p>
                <img className="tt-47-team-logo" src={teamlogo} alt={"teamlogo"}/>
            </div> 
        </div>
    )
}