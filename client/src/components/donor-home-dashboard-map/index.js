import './index.scss';
import {Link} from "react-router-dom";
import map1 from './map1.png';
import map2 from './map2.png';
import map3 from './map3.png';
import map4 from './map4.png';
import map5 from './map5.png';


export default function DonorHomeDashboardMap(){
    return(
    <div className="donorHomeDashboardMap">
            
            <Link className='donorMapImage1' to="/map">
             <img src={map1} alt="toy1" />
            </Link>

            <Link className='donorMapImage2' href="/map">
             <img src={map2} alt="toy2" />
            </Link>

            <Link className='donorMapImage3' href="/map">
             <img src={map3} alt="toy3" />
            </Link>

            <Link className='donorMapImage4' href="/map">
             <img src={map4} alt="toy4" />
            </Link>

            <Link className='donorMapImage5' href="/map">
             <img src={map5} alt="toy5" />
            </Link>

            <h2>Explore nearby charity centers and be the reason for someones happiness.</h2>
            
            <button><Link to="/map">Donate now to the nearest charity</Link></button>

    </div>
    )
}