import { useContext, useState } from 'react';
import './index.scss'
import DonorDonationProcessList from "../../components/donor-donation-process-list";
import DonorDonationProcessForm from "../../components/donor-donation-process-form";
import DonorDonationModal from '../../components/donor-donation-congrats-modal';
import GeneralModalWrapper from '../../components/general-modal-wrapper';
import AuthContext from '../../services/auth-context';
export default function DonationConfirmation(){
    const authCtx = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
    console.log(authCtx);
    function getClick(data){
            setOpenModal(data);
    }
    return(
        <div className="donationConfirmation-page">
            <div className="donation-confirmation-list">
                <DonorDonationProcessList/>
            </div>
            <div className="donation-confirmation-form">
                <DonorDonationProcessForm
                    onFormClicked={getClick}
                />
            </div>
            {openModal && 
            <GeneralModalWrapper>
                <DonorDonationModal/>
            </GeneralModalWrapper>    
            }
        </div>
    )
}