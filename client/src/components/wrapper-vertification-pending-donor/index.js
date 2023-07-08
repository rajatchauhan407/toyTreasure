import './index.scss';
import { useEffect, useState, useRef} from 'react';
import CardOrgTT13 from '../card-vertification-pending-donor'
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';

function WrapperCardOrgTT13() {
  const [orgData, setOrgData]=useState([]);
  let btnRef=useRef(null);
  async function getData(){
    const data = await FireBaseFirestoreService.getDocuments("organization_profile");
    
   
    let array =[];
    data.forEach(
      (doc)=>{array.push(doc.id)}
      );
      setOrgData(data);
      console.log("array   "+array);
  }
  useEffect(()=>{
    getData();
    btnRef.current.style.backgroundColor= "hotpink";
  },[]);
  

  const verification = [
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
];

    return <div className="Verification">
      {/* <p>{orgData.forEach((el)=>{console.log(el.id)})}</p> */}
      <h1>Verification</h1>
      <div className="org-verification-donation-req">
       <h2>Donation Requests</h2>
       <div id="org-verification-sort-container">
          <button id="org-vertification-sort-button" ref={btnRef}>Sort By</button>
          {/* <ul id="org-verification-sort-options">
            <li data-sort="date">Date</li>
            <li data-sort="donationStatus">Donation Status</li>
          </ul> */}
        </div>
      </div>
      

      <div className="TitleCardOrgTT13">
              <ul>
                  <li>Order Number</li>
                  <li>Name</li>
                  <li>Method</li>
                  <li>Date</li>
                  <li>Qty</li>
                  <li>Donation Status</li>
                  <li>Action</li>
              </ul>
      </div>
      
      {verification.forEach((el)=>{
          
                return <CardOrgTT13 
                          orderNumber={el.id}
                          name={"el.name"}
                          method={"el.method"}
                          date={"el.date"}
                          Qty={"el.Qty"}
                          donationStatus={"el.donationStatu"}
                          />
            })}
            </div>
          }
export default WrapperCardOrgTT13;
