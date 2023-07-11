import DonorDonationProcessList from "../../components/donor-donation-process-list";
import DonorDonationProcessForm from "../../components/donor-donation-process-form";

export default function donationConfirmation(){
    return(
        <div className="donationConfirmation-page">
            <DonorDonationProcessList/>
            <DonorDonationProcessForm/>
        </div>
    )
}