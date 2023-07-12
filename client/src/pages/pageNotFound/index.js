import './index.scss';

import { Link } from 'react-router-dom';


export default function PageNotFound(){
    return(<>
        <div className='errorPage'>
            <h1>error 404</h1>
            <h3>Page is not found</h3>
            <p>the page doesn't exist or was deleted</p>
            <button><Link to="/login">Back to Home</Link></button>
        </div>
        </>);
}