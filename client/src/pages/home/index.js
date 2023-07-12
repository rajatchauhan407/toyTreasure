import './index.scss';
import AuthContext from '../../services/auth-context';
import React, {useContext} from "react";

import { useEffect, useState } from 'react';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";

import DashboardPoints from '../../components/donor-home-dashboard-points';
import DonorHomeDashboardMap from '../../components/donor-home-dashboard-map';
import HomeDashBoardStories from '../../components/home-dashboard-stories';
import HomeDashboardRewardsCard from '../../components/donor-home-dashboard-rewards-card-wrapper';
import DiscountCard from '../../components/donor-rewards-discount-banner';
import DashboardPendingDonation from '../../components/donor-home-dashboard-pending-donation';



export default function Home(){
  const userNameAuth = useContext(AuthContext);
  const [hasPendingDonation, setHasPendingDonation] = useState(false);

  useEffect(() => {
    async function checkPendingDonation() {
      try {
        const data = await FireBaseFirestoreService.getDocumentsInArray("user_donations");
        const hasPending = data.some((donation) => donation.user_donation_status.pending === true);
        setHasPendingDonation(hasPending);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    checkPendingDonation();
  }, []);

    let discountData = [
        {
          url: 'https://picsum.photos/400/400?rand=431',
          discount: "20% off",
          info: "Super Sale",
          req:"Father's Day Offer"
        },
       
      ];
      const discountList = discountData.map((el) => (
        <DiscountCard 
        url={el.url} 
        info={el.info}
        discount={el.discount}
        req={el.req} />
      ));

    return(<>
    <div className='home-page'>
        <div className="home-welcome">
            <h1>Hi {userNameAuth.displayName}, make your first donation</h1>
            <DashboardPoints/>
        </div>

        {hasPendingDonation && (
          <div className='pending-donation'>
            <DashboardPendingDonation/>
          </div>
        )}

        <div className='home-map'>
            <DonorHomeDashboardMap/>
        </div>
        
        <div className='home-stories'>
            <HomeDashBoardStories/>
        </div>

        <div className="home-rewards">
                <h1>Rewards</h1>
                <HomeDashboardRewardsCard/>
        </div>

        <div className="home-discount">
                <h1>Special discount for you</h1>                
                {discountList}
        </div>
    </div>
    </>);
};



