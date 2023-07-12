import './index.scss';
import {Link} from "react-router-dom";
export default function DonorHomeDashboardMap(){
    return(
    <div className="donorHomeDashboardMap">
            
            <Link className='donorMapImage1' to="#">
             <img src="https://picsum.photos/400/400?rand=434" alt="Organization Name" />
            </Link>

            <Link className='donorMapImage2' href="#">
             <img src="https://picsum.photos/400/400?rand=431" alt="Organization Name" />
            </Link>

            <Link className='donorMapImage3' href="#">
             <img src="https://picsum.photos/400/400?rand=433" alt="Organization Name" />
            </Link>

            <Link className='donorMapImage1' href="#">
             <img src="https://picsum.photos/400/400?rand=432" alt="Organization Name" />
            </Link>

            <h2>Explore nearby charity centers and be the reason for someones happiness.</h2>
            
            <button><Link to="/map">Donate now to the nearest charity</Link></button>

    </div>
    )
}