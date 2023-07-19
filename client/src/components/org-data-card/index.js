import "./index.scss";
import org_icon1 from './founded-year.svg';
import org_icon2 from './total-donors.svg';
import org_icon3 from './total-kids.svg';
import org_icon4 from './donated-toys.svg';

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
                        <img src={org_icon1} alt="founded-year-icon"/>
                    </div>
                    <h2 className="custom-h1">{orgImpact.founded_year}</h2>
                    <h5>Founded Year</h5>
                </div>

                <div className="card-2">
                    <div className="img-wrapper">
                        <img src={org_icon2} alt="donors-icon"/>
                    </div>
                    <h2 className="custom-h1">{orgImpact.total_donors}</h2>
                    <h5>Total Donors</h5>
                </div>

                <div className="card-3">
                    <div className="img-wrapper">
                        <img src={org_icon3} alt="kids-icon"/>
                    </div>
                    <h2 className="custom-h1">{orgImpact.kids}</h2>
                    <h5>Kids</h5>
                </div>

                <div className="card-4">
                    <div className="img-wrapper">
                        <img src={org_icon4} alt="toys-donated-icons"/>
                    </div>
                    <h2 className="custom-h1">{orgImpact.toys}</h2>
                    <h5>Donated Toys</h5>
                </div>
            </div>
       

    </div>
    ))
}