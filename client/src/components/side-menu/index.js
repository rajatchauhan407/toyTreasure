import "./index.css";

export default function OrgSideMenu(props)
{
    return(
        <div className="OrgSideMenuWrapper">
           <img className="site-logo" src="./images/logo-ee-8.png" alt="siteLogo"/>       
           
                <nav className="main-menu">
                    <ul>
                        <li><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> Profile</a></li>
                        <li><a href="#"><i class="fa-sharp fa-solid fa-chart-line"></i> Dashboard</a></li>               
                        <li><a href="#"><i class="fa-brands fa-wpforms"></i> Verification</a></li>
                        <li><a href="#"><i class="fa fa-cog" aria-hidden="true"></i> Setting</a></li>                
                    </ul>
                </nav>   

                <nav className="contact-menu">
                    <ul>
                        <li><a href="#"><i class="fa fa-commenting-o" aria-hidden="true"></i> Contact Us</a></li>
                        <li><a href="#"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>               
                    </ul>
                </nav>  
             
        </div>
    )
}

