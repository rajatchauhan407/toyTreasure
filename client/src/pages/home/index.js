import './index.scss';
import GeneralModalWrapper from '../../components/general-modal-wrapper';
import UserRewardsModal from '../../components/user-rewards-modal';

export default function Home(){
    
    return(<>
         <h1>Home</h1> 
         <GeneralModalWrapper>
          <UserRewardsModal/>
        </GeneralModalWrapper>  
         
    </>);
};

