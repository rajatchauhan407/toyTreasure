import './index.scss';
import logo from "./appLogo.svg"
import { Link } from 'react-router-dom';


export default function PageNotFound(){
    return(<>
            <div class="error-page-image-wrapper">
                <img className="site-logo" src={logo} alt={"siteLogo"}/>
            </div> 
        <div className='errorPage'>
             
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
            <h1>Error 404</h1>
            <h3>Page not found</h3>
            <p>The page doesn't exist or was deleted</p>
            <button><Link to="/login">Back to Home</Link></button>
        </div>
        </>);
}