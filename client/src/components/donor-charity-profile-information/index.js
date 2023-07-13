import "./index.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";

export default function DonorCharityProfileInformation({info,url}){
  console.log(info);
    const [orgCharityProfile, setOrgCharityProfile] = useState([]);

  useEffect(() => {
    setOrgCharityProfile(info);
  }, [info]);


  return (
    <div className="charityInformation">
        
            <div key={orgCharityProfile.id} className="profileinformation">
                <img src={url} alt="logo-charity" />
                <h2>{orgCharityProfile.org_name}</h2>
                <p>{orgCharityProfile.org_description}</p>
                <button><Link to="/donation/toys">Donate Now</Link></button>
            </div>
        

        <div className="profileImage">
            <img src="https://picsum.photos/1500/800" alt="main-charity" />
        </div>

    </div>
    );
}