import "./index.scss";
import basket from "./basket.png";
import { useEffect, useState } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';

export default function OrgVerificationDetails(props) {
  const [verToyList, setVerToyList] = useState([]);
  const [donorDetails, setDonorDetails] = useState([]);
  const [donorInfo, setDonorInfo] = useState([]);

  useEffect(() => {
    getDataToyList();
    getDataDonorDetail();
    getDataDonorInfo();
  }, []);

  async function getDataToyList() {
    const toyListData = await FireBaseFirestoreService.getDocumentsInArray("donation_list");
    setVerToyList(toyListData);
  }

  async function getDataDonorDetail() {
    const donorDetailsData = await FireBaseFirestoreService.getDocumentsInArray("user_donations");
    setDonorDetails(donorDetailsData);
  }

  async function getDataDonorInfo() {
    const donorInfoData = await FireBaseFirestoreService.getDocumentsInArray("user");
    setDonorInfo(donorInfoData);
  }

  function handleAccept() {
    props.onAccept(true);
  }

  let sumOfAmt = 0;
  let sumOfPoints = 0;
  let wishListIcon = "";

  return (
    <div className="OrgVerDetailsCardWrapper">
      <div className="org-ver-details-card">
        <div className="detailsHeader">
          <h2>Verification Details</h2>
          <h3>Donation: #----</h3>
        </div>
        <div className="details">
          <img className="basket" src={basket} alt="basket" />
          <div className="donorInfo">
            {donorInfo.map((el) => (
              <div className="displayDonorInfo" key={el.id}>
                <p className="dTitle">Donor Name</p>
                <p className="dInfo">{el.displayName}</p>
                <p className="dTitle">Donor Phone</p>
                <p className="dInfo">{el.phoneNumber}</p>
              </div>
            ))}
            <div className="displayDonorInfo">
              <p className="dTitle">Date and Time</p>
              {donorDetails.map((el) => (
                <p className="dInfo" key={el.id}>
                 {el.user_donation_date.toDate().toString()}{" "} <i className="fa-sharp fa-light fa-triangle-exclamation dTitle"></i>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <table className="org-verification-details-table">
        <thead>
          <tr>
            <th className="crownIcon"></th>
            <th>Toy Name</th>
            <th>Amount</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {verToyList.map((el) => {
            sumOfAmt += el.amount;
            sumOfPoints += el.points;
            wishListIcon = (el.fromWishlist === "y") ? <i className="fa-solid fa-crown"></i> : "";

            return (
              <tr key={el.uid}>
                <td className="crownIcon">{wishListIcon}</td>
                <td>{el.donation_toy_name}</td>
                <td>{el.donation_toy_amount}</td>
                <td>{el.donation_toy_points}</td>
              </tr>
            );
          })}
          <tr className="totalPoints">
            <td className="crownIcon"></td>
            <td>Total Points</td>
            <td>{sumOfAmt}</td>
            <td>{sumOfPoints}</td>
          </tr>
        </tbody>
      </table>
      <label>
        <input type="checkbox" id="toysChecked" name="toysChecked" />
        Donated toys have been thoroughly checked before proceeding with the donation.
      </label>
      <div className="orgVerButtons">
        <input type="Button" value="Cancel Donation" id="cancelDonation" className="orgVerButtonCancel" />
        <input type="Button" value="Accept" id="acceptDonation" className="orgVerButtonAccept" onClick={handleAccept} />
      </div>
    </div>
  );
}