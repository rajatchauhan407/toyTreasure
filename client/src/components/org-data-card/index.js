import "./index.scss";
import { useEffect, useState } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";


export default function OrgDataCard(){
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

    // let orgData = [
    //     {
    //         imageUrl:"https://picsum.photos/400/400?rand=431",
    //         type: "Donors",
    //         count:256
    //     },
    //     {
    //         imageUrl:"https://picsum.photos/400/400?rand=432",
    //         type: "Donors",
    //         count:256
    //     },
    //     {
    //         imageUrl:"https://picsum.photos/400/400?rand=433",
    //         type: "Donors",
    //         count:256
    //     },
    //     {
    //         imageUrl:"https://picsum.photos/400/400?rand=434",
    //         type: "Donors",
    //         count:256
    //     }
    // ]
    return (
        <div className="charityInformation">
        {orgImpact.map(profile => (
            <div key={profile.id} className="card-wrapper">
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