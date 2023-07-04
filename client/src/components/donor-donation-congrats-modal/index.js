import './index.scss';

export default function DonorDonationModal(props){
    return(
        <div className="modalCongrats">
            <img src="https://picsum.photos/200/200?random=567" alt="" />
            <h2>Thank You</h2>
            <p>Your contribution is greatly appreciated and will bring joy and happiness to the children.</p>
            <div className='instructions'>
                <h3>Reward Instruction:</h3>
                <p>After your donation is completed in site, scan the provided QR code given by the organization to earn the rewards points.</p>
            </div>
                <button className="go-home">Return to Home</button>
        </div>
    )
}