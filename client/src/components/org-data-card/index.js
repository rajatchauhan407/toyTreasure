import "./index.scss";
import { useEffect, useState } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";


export default function OrgDataCard({ displayMode }){
    const [orgImpact, setOrgImpact] = useState([]);

  useEffect(() => {
    async function getOrgImpactData() {
      try {
        const data = await FireBaseFirestoreService.getDocumentsInArray("organization_profile");
        setOrgImpact(data || []);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getOrgImpactData();
  }, []);

  const orgCardsWrapperClass = displayMode === 'two-columns' ? 'org-cards-wrapper two-columns' : 'org-cards-wrapper';

    return (
        <div className="charityImpact">
        {orgImpact.map(profile => (
            <div key={profile.id} className={orgCardsWrapperClass}>
                <div className="card-1">
                    <div className="img-wrapper">
                        <img src="https://picsum.photos/200/200?rand=434" alt=""/>
                    </div>
                    <h2>{profile.impactDetails.founded_year}</h2>
                    <p>Founded Year</p>
                </div>

                <div className="card-2">
                    <div className="img-wrapper">
                        <img src="https://picsum.photos/200/200?rand=434" alt=""/>
                    </div>
                    <h2>{profile.impactDetails.total_donors}</h2>
                    <p>Total Donors</p>
                </div>

                <div className="card-3">
                    <div className="img-wrapper">
                        <img src="https://picsum.photos/200/200?rand=434" alt=""/>
                    </div>
                    <h2>{profile.impactDetails.kids}</h2>
                    <p>Kids</p>
                </div>

                <div className="card-4">
                    <div className="img-wrapper">
                        <img src="https://picsum.photos/200/200?rand=434" alt=""/>
                    </div>
                    <h2>{profile.impactDetails.toys}</h2>
                    <p>Donated Toys</p>
                </div>
            </div>
        ))}

    </div>
    )
}