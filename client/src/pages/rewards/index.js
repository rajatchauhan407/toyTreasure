import HomeDashboardRewardsCard from "../../components/donor-home-dashboard-rewards-card-wrapper";
import HomeDashboardBadgeHistory from "../../components/donor-home-rewards-badge-history-Wrapper";
import DiscountCard from "../../components/donor-rewards-discount-banner";
import DashboardPoints from "../../components/donor-home-dashboard-points";
import { useState,useContext } from "react";
import GeneralModalWrapper from "../../components/general-modal-wrapper";
import UserRewardsModal from "../../components/user-rewards-modal";
import "./index.scss";
import specialDiscount from './specialDiscount.png';
import redeemIcon from './../home/Redeem.png'
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
import AuthContext from "../../services/auth-context";
export default function Reward(){
    const userNameAuth = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
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
      async function reducePoints(rewardPoints){
        const userData = await FireBaseFirestoreService.getDocumentById('user',userNameAuth.uid);
          await FireBaseFirestoreService.updateDocumentById('user',userNameAuth.uid,{user_points: userData.data().user_points - rewardPoints});
      }
    return(
        <div className="tt-101-DonorRewardsWrapper">
            <div className="tt-101-rewards-profile">
                <div className="tt-101-rewards-profile-and-points">
                    <h1>Rewards Profile</h1>
                    <DashboardPoints/>
                    {/* <h2 className="tt-101-points">Your Points : 600</h2> */}
                </div>
                <HomeDashboardBadgeHistory/>         
            </div>

            <div className="tt-101-redeem-rewards">
                <div className='rewards-info'>
                    <img src={redeemIcon} alt='redeemIcon'/>
                    <h2 className='custom-h1'>Rewards</h2>
                </div>
                    <HomeDashboardRewardsCard
                    onClickRedeem={(data,points) => {window.scrollTo(0,0);setOpenModal(true); reducePoints(points);}}
                    />
                    {openModal && 
                        <GeneralModalWrapper onCloseModal={()=>{setOpenModal(false)}}>
                            <UserRewardsModal/>
                        </GeneralModalWrapper>}
            </div>

            <div className="tt-101-special-discount">
                <h1>Special discount for you</h1>                
                {discountList}
            </div>

            <div className="tt-101-special-discount-mq">
                <h2 className='custom-h1'>Special discounts for you</h2>                
                <img src={specialDiscount} alt="special Discount"/>
            </div>
        </div>
    )
}