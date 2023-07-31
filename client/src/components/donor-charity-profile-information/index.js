import "./index.scss";
import arrowBack from './../../pages/map/back_arrow.png';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
// import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";

export default function DonorCharityProfileInformation({info,logo, main}){
  console.log(info);
  const {id} = useParams()
    const [orgCharityProfile, setOrgCharityProfile] = useState([]);

  useEffect(() => {
    setOrgCharityProfile(info);
  }, [info]);


  return (
    <div className="charityInformation">
        
            <div key={orgCharityProfile.id} className="profileinformation">
              <div className="link">
                <Link to="/map"><button className="back"><img src={arrowBack} alt="back-arrow"/></button></Link>
              </div>

              <div className="information">
                <img className="charity-logo" src={logo} alt="logo-charity" />
                <h2>{orgCharityProfile.org_name}</h2>
                <p>{orgCharityProfile.org_description}</p>
                <button><Link to={`/donation/toys/${id}`}>Donate Now</Link></button>
              </div>
            </div>
        

        <div className="profileImage">
            <img src={main} alt="main-charity" />
        </div>

    </div>
    );
}