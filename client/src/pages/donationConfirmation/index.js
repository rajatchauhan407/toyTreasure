import { useContext, useState } from 'react';
import './index.scss'
import arrowBack from './back_arrow.png';
import { useParams } from 'react-router-dom';
import DonorDonationProcessList from "../../components/donor-donation-process-list";
import DonorDonationProcessForm from "../../components/donor-donation-process-form";
import DonorDonationModal from '../../components/donor-donation-congrats-modal';
import GeneralModalWrapper from '../../components/general-modal-wrapper';
import AuthContext from '../../services/auth-context';
import { Link } from 'react-router-dom';
export default function DonationConfirmation(){
    const {id} = useParams();
    const authCtx = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
    console.log(authCtx);
    function getClick(data){
            setOpenModal(data);
    }
    return(
        <div class="donationConfirmation-page-Wrapper">
            <h1> <Link to={`/donation/toys/${id}`}><img src={arrowBack} alt="back-arrow"/></Link>  Confirm your Donation</h1> 
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
        </div>
    )
}