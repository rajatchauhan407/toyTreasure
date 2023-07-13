import "./index.scss";
import { useEffect, useState } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";


export default function OrgDataCard({ displayMode,details }){
    const [orgImpact, setOrgImpact] = useState([]);

  useEffect(() => {
    setOrgImpact(details);
  }, [details]);

  const orgCardsWrapperClass = displayMode === 'two-columns' ? 'org-cards-wrapper two-columns' : 'org-cards-wrapper';

    return (
        (orgImpact && <div className="charityImpact">
        
            <div className={orgCardsWrapperClass}>
                <div className="card-1">
                    <div className="img-wrapper">
                        <img src="https://picsum.photos/200/200?rand=434" alt=""/>
                    </div>
                    <h2>{orgImpact.founded_year}</h2>
                    <p>Founded Year</p>
                </div>

                <div className="card-2">
                    <div className="img-wrapper">
                        <img src="https://picsum.photos/200/200?rand=434" alt=""/>
                    </div>
                    <h2>{orgImpact.total_donors}</h2>
                    <p>Total Donors</p>
                </div>

                <div className="card-3">
                    <div className="img-wrapper">
                        <img src="https://picsum.photos/200/200?rand=434" alt=""/>
                    </div>
                    <h2>{orgImpact.kids}</h2>
                    <p>Kids</p>
                </div>

                <div className="card-4">
                    <div className="img-wrapper">
                        <img src="https://picsum.photos/200/200?rand=434" alt=""/>
                    </div>
                    <h2>{orgImpact.toys}</h2>
                    <p>Donated Toys</p>
                </div>
            </div>
       

    </div>
    ))
}