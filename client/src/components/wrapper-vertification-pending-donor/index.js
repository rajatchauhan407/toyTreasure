import './index.scss';
import CardOrgTT13 from '../card-vertification-pending-donor';

const verificationData = [
  {
    orderNumber: 37890,
    name: "Greg Thomas",
    method: "drop-off",
    date: "05/05/2023",
    Qty: 6,
    donationStatus: "Pending"
  },
];

export default function WrapperCardOrgTT13() {
  return (
    <div className="Verification">
      <h1>Verification</h1>
      <div className="org-verification-donation-req">
        <h2>Donation Requests</h2>
      </div>

      <table className="TableCardOrgTT13">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Name</th>
            <th>Method</th>
            <th>Date</th>
            <th>Qty</th>
            <th>Donation Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {verificationData.map((data) => (
            <CardOrgTT13 key={data.orderNumber} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
