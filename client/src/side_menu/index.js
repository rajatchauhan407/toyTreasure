import "./index.css";

export default function OrgSideMenu(props)
{
    return(
        <div className="OrgSideMenuWrapper">
           <img class="site-logo" src="./images/logo-ee-8.png" alt="siteLogo"/>        
            <nav class="main-menu">
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Dashboard</a></li>               
                    <li><a href="#">Verification</a></li>
                    <li><a href="#">Setting</a></li>                
                </ul>
            </nav>   

            <nav class="contact-menu">
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Logout</a></li>               
                </ul>
            </nav>   
        </div>
    )
}