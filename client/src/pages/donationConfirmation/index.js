import { useState } from 'react';
import './index.scss'
import DonorDonationProcessList from "../../components/donor-donation-process-list";
import DonorDonationProcessForm from "../../components/donor-donation-process-form";
import DonorDonationModal from '../../components/donor-donation-congrats-modal';
import GeneralModalWrapper from '../../components/general-modal-wrapper';
export default function DonationConfirmation(){
    const [openModal, setOpenModal] = useState(false);
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