import './index.scss';
import DashboardPoints from '../../components/donor-home-dashboard-points';
import DonorHomeDashboardMap from '../../components/donor-home-dashboard-map';
import HomeDashBoardStories from '../../components/home-dashboard-stories';

export default function Home(){
    return(<>
        <div className="welcome">
            <h1>Hi user, make your first donation</h1>
            <DashboardPoints/>
        </div>

        <DonorHomeDashboardMap/>
        <HomeDashBoardStories/>


        
    </>);
};



