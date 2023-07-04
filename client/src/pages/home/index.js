import './index.scss';
import GeneralModalWrapper from '../../components/general-modal-wrapper';
import DonorPointsModal from '../../components/donor-points-awarded-modal';

export default function Home(){
    
    return(<>
         <h1>Home</h1>
         <GeneralModalWrapper>
            <DonorPointsModal/> 
         </GeneralModalWrapper>
    </>);
};

