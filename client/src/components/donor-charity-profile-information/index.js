import "./index.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";

export default function DonorCharityProfileInformation(){
    const [orgCharityProfile, setOrgCharityProfile] = useState([]);

  useEffect(() => {
    async function getOrgCharityProfileData() {
      try {
        const data = await FireBaseFirestoreService.getDocumentsInArray("organization_profile");
        setOrgCharityProfile(data || []);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getOrgCharityProfileData();
  }, []);


  return (
    <div className="charityInformation">
        {orgCharityProfile.map(profile => (
            <div key={profile.id} className="profileinformation">
                <img src="https://picsum.photos/52/52" alt="logo-charity" />
                <h2>{profile.profileDetails.org_name}</h2>
                <p>{profile.profileDetails.org_description}</p>
                <button><Link to="/donation/toys">Donate Now</Link></button>
            </div>
        ))}

        <div className="profileImage">
            <img src="https://picsum.photos/1500/800" alt="main-charity" />
        </div>

    </div>
    );
}