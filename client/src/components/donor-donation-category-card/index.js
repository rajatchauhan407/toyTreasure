/* eslint-disable react-hooks/exhaustive-deps */
import "./index.scss";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';

export default function DonationCategoryCard({onGetCategories}) {
  const [donationCategory, setDonationCategory] = useState([]);
  const [donations,setDonations] = useState([]);
  const{id}=useParams();
  async function getDonationCategoryData() {
    try{
    const donationCategoryData = await FireBaseFirestoreService.getDocumentById("organization_profile",id);
    let array = donationCategoryData.data().categories.map((item) => ({
      ...item,
      quantity: 0
    }));
    setDonationCategory(array);
    // console.log(donationCategoryData.data().categories);
  }catch(error){
      console.log(error);
    }
  }

  const handleDecrement = (index) => {
    setDonationCategory((prevList) => {
      const newList = [...prevList];
      newList[index].quantity = Math.max(newList[index].quantity - 1, 0);
      console.log(newList);
      return newList;
    });
    // setDonations(donationCategory);
    // onGetCategories(donations);
  };

  const handleIncrement = (index) => {
    setDonationCategory((prevList) => {
      const newList = [...prevList];
      newList[index].quantity = Math.min(newList[index].quantity + 1, 100); // Use a fixed maximum value or replace it with dynamic data
      console.log(newList);
      return newList;
    });
    // setDonations(donationCategory);
    // onGetCategories(donations);
  };

  useEffect(() => {
    setDonations(donationCategory); // Update donations when donationCategory changes
    onGetCategories(donationCategory); // Call onGetCategories with the updated donationCategory
  }, [donationCategory,setDonations]); 

  useEffect(() => {
    getDonationCategoryData();
  }, []);

  return (
    <div className="donationCategoryCardWrapper">
      {donationCategory.map((el, index) => (
        <div key={index} className="donationCategoryCardWrappBorder">
          <div className="donationCategoryCardImgWrapper">
            <img src={el.category_picture} alt="" />
            <p className="donationCategoryCardPoints"><span>{el.category_points}</span> <br></br>points</p>
          </div>
          <div className="donationCategoryNumberInput">
            <button className="decrement" onClick={() => handleDecrement(index)}>-</button>
            <input type="number" className="input-field" value={el.quantity} min="0" max="100" readOnly />
            <button className="increment" onClick={() => handleIncrement(index)}>+</button>
          </div>
          <h5>{el.category_name}</h5>
          <p>{el.category_age}</p>
        </div>
      ))}
    </div>
  );
}
