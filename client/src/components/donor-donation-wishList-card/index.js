import "./index.scss";
import { useState, useEffect } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';

export default function DonationWishListCard() {
  const [donationWishList, setDonationWishList] = useState([]);

  async function getDonationWishListData() {
    const donationWishListData = await FireBaseFirestoreService.getDocumentsInArray("organization_wishlist");
    let array = donationWishListData.map((item) => ({
      ...item,
      quantity: 0 
    }));
    setDonationWishList(array);
  }

  const handleDecrement = (index) => {
    setDonationWishList((prevList) => {
      const newList = [...prevList];
      newList[index].quantity = Math.max(newList[index].quantity - 1, 0);
      return newList;
    });
  };

  const handleIncrement = (index) => {
    setDonationWishList((prevList) => {
      const newList = [...prevList];
      newList[index].quantity = Math.min(newList[index].quantity + 1, newList[index].org_w_toys_required);
      return newList;
    });
  };

  useEffect(() => {
    getDonationWishListData();
  }, []);

  return (
    <div className="wrapperBugFinder">
      {donationWishList.map((el, index) => (
        <div className="donationWishListCardWrapper">
          <div className="donationWishListCardImgWrapper">
            <p className="donationWishListCardPoints">{el.org_w_toys_points}</p>
            <img src={el.org_w_toy_picture} alt="" />
            <p>This is the reference image.</p>
          </div>
          <div className="donationWishListNumberInput">
            <button className="decrement" onClick={() => handleDecrement(index)}>-</button>
            <input type="number" className="input-field" value={el.quantity} min="0" max={el.org_w_toys_required} readOnly />
            <button className="increment" onClick={() => handleIncrement(index)}>+</button>
          </div>
          <h4>{el.org_w_toy_name}</h4>
          <p>{el.org_w_toy_category}</p>
        </div>
      ))}
    </div>
  );
}