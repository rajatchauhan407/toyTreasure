import './index.scss';

export default function DashboardPendingDonation(){
    const tt72pendingDonation = [
        {pending:"one",dateandtime:"June 18th, 2023 (2:00 pm - 4:00 pm)"}
    ]
    return (
       <div className='tt-72-DashboardPendingDonationWrapper'>
            <div className="tt-72-DashboardPendingDonation">             
                <h3>You have {tt72pendingDonation[0].pending} Pending Donation</h3>
                <p>{tt72pendingDonation[0].dateandtime}</p>
                <h3>SharingSmiles.org</h3>
                <input type="Button" value="Scan QR Code"  id="tt72scanQR"  className="tt72scanQR"/>
            </div>
       </div>
    );
}