import "./index.css";

export default function OrgSideMenu(props)
{
    return(
        <div className="OrgSideMenuWrapper">
           <img className="site-logo" src="./images/logo-ee-8.png" alt="siteLogo"/>        
            <nav className="main-menu">
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Dashboard</a></li>               
                    <li><a href="#">Verification</a></li>
                    <li><a href="#">Setting</a></li>                
                </ul>
            </nav>   

            <nav className="contact-menu">
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Logout</a></li>               
                </ul>
            </nav>   
        </div>
    )
}