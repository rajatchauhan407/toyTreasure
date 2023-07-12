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
    <div className="CharityInformation">
        {orgCharityProfile.map(profile => (
            <div key={profile.id} className="Information">
                <img src="" alt="logo-charity" />
                <h2>{profile.org_name}</h2>
                <p>Organization Description</p>
                <button><Link to="/donation/toys">Donate Now</Link></button>
            </div>
        ))}

        <div className="Image">
            <img src="" alt="main-charity" />
        </div>
    </div>
    );
}