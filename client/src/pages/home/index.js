import './index.scss';
import GeneralModalWrapper from '../../components/general-modal-wrapper';
import DonorDonationModal from '../../components/donor-donation-congrats-modal';

export default function Home(){
    
    return(<>
         <h1>Home</h1>   
         <GeneralModalWrapper>
            <DonorDonationModal/>
         </GeneralModalWrapper>
    </>);
};

