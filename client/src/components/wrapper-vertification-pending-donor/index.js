import './index.scss';
import { useEffect, useState, useRef } from 'react';
import CardOrgTT13 from '../card-vertification-pending-donor'
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
function WrapperCardOrgTT13() {
  const [orgData, setOrgData] = useState([]); 
  const [count,setCount] = useState(0);
  let btnRef = useRef(null);
  let liRef = useRef(null);
  async function getData(){
    const data = await FireBaseFirestoreService.getDocumentsInArray("organization_profile");
    let array = data;
    // array = data.docs.map(
    //   (doc)=>{return doc.data()}
    //   );
    setOrgData(array);
      // console.log(array);
  }
  // useEffect(()=>{

  // });
  useEffect(()=>{
    getData();
  },[]);
  // getData();
    useEffect(()=>{
      console.log("useEffect called");
    },[count]);
 
function handleCount(){
  console.log("Hello");
  setCount(count+1);
  // console.dir(btnRef.current);
    console.dir(liRef);
  // btnRef.current.textContent = "hotpink";
}
  const verification = [
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
];

    return <div className="Verification">
    <button 
    onClick={handleCount}
    >Press it</button>
      <h1>Verification</h1>
      <div className="org-verification-donation-req">
       <h2 ref={btnRef}>Donation Requests</h2>
       <div id="org-verification-sort-container">
          <button id="org-vertification-sort-button">Sort By</button>
          {/* <ul id="org-verification-sort-options">
            <li data-sort="date">Date</li>
            <li data-sort="donationStatus">Donation Status</li>
          </ul> */}
        </div>
      </div>
      

      <div className="TitleCardOrgTT13">
              <ul>
                  <li ref={liRef}>Order Number</li>
                  <li>Name</li>
                  <li>Method</li>
                  <li>Date</li>
                  <li>Qty</li>
                  <li>Donation Status</li>
                  <li>Action</li>
              </ul>
      </div>
      
      {orgData.map((el)=>{
          
                return <CardOrgTT13 
                          orderNumber={el.org_name}
                          name="el.name"
                          method="el.method"
                          date="el.date"
                          Qty="el.Qty"
                          donationStatus="el.donationStatus"
                          />
            })}
            </div>
          }
          
export default WrapperCardOrgTT13;
