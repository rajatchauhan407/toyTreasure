import './index.scss';
import DashboardPoints from '../../components/donor-home-dashboard-points';
import DonorHomeDashboardMap from '../../components/donor-home-dashboard-map';
import HomeDashBoardStories from '../../components/home-dashboard-stories';
import HomeDashboardRewardsCard from '../../components/donor-home-dashboard-rewards-card-wrapper';
import DiscountCard from '../../components/donor-rewards-discount-banner';

export default function Home(){
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
        <div className="welcome">
            <h1>Hi user, make your first donation</h1>
            <DashboardPoints/>
        </div>

        <DonorHomeDashboardMap/>
        <HomeDashBoardStories/>

        <div className="home-rewards">
                <h1>Rewards</h1>
                <HomeDashboardRewardsCard/>
        </div>

        <div className="home-discount">
                <h1>Special discount for you</h1>                
                {discountList}
        </div>

    </>);
};



