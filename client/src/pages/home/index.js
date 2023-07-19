import './index.scss';
import redeemIcon from './Redeem.png'
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function checkPendingDonation() {
      try {
        const data = await FireBaseFirestoreService.getDocumentsInArray("user_donations");
        const hasPending = data.filter((donation) => ((donation.donorUID === userNameAuth.uid) && (donation.verificationStatus===false)));
        // console.log(hasPending);
        if(hasPending.length > 0){
          setLoading(false);
          setHasPendingDonation(hasPending[0] || "");
          
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    checkPendingDonation();
  }, [setHasPendingDonation,setLoading,userNameAuth.uid]);

    let discountData = [
        {
          // url: {banner},
          discount: "20% off ",
          info: "Get the best cuddle in the whole wide world for your kid",
          req:"on your first order"
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
            <DashboardPoints
              
            />
        </div>

        {!loading && (
          <div className='pending-donation'>
            <DashboardPendingDonation
              donations={hasPendingDonation}
            />
          </div>
        )}

        <div className='home-map'>
            <DonorHomeDashboardMap/>
        </div>
        
        <div className='home-stories'>
            <HomeDashBoardStories/>
        </div>

        <div className="home-rewards">
          <div className='rewards-info'>
            <img src={redeemIcon} alt='redeemIcon'/>
            <h2 className='custom-h1'>Rewards</h2>
          </div>
            <HomeDashboardRewardsCard/>
        </div>

        <div className="home-discount">
                <h2 className='custom-h1'>Special discounts for you</h2>                
                {discountList}
        </div>
    </div>
    </>);
};



