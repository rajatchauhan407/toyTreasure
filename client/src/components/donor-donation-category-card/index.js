import "./index.scss";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';

export default function DonationCategoryCard() {
  const [donationCategory, setDonationCategory] = useState([]);
  const{id}=useParams();
  async function getDonationCategoryData() {
    try{
    const donationCategoryData = await FireBaseFirestoreService.getDocumentById("organization_profile",id);
    // let array = donationCategoryData.map((item) => ({
    //   ...item,
    //   quantity: 0
    // }));
    setDonationCategory(donationCategoryData.data().categories);
    // console.log(donationCategoryData.data().categories);
  }catch(error){
      console.log(error);
    }
  }

  const handleDecrement = (index) => {
    setDonationCategory((prevList) => {
      const newList = [...prevList];
      newList[index].quantity = Math.max(newList[index].quantity - 1, 0);
      return newList;
    });
  };

  const handleIncrement = (index) => {
    setDonationCategory((prevList) => {
      const newList = [...prevList];
      newList[index].quantity = Math.min(newList[index].quantity + 1, 100); // Use a fixed maximum value or replace it with dynamic data
      return newList;
    });
  };

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
