import "./index.scss";
import { useState, useEffect, useContext } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import AuthContext from "../../services/auth-context";
import { database } from "../../FirebaseConfig";
export default function DonationWishListCard() {
  const [donationWishList, setDonationWishList] = useState([]);
  const authCtx = useContext(AuthContext);

  async function getDonationWishListData() {
    const wishlistCollection = collection(database,"organization_wishlist");
    let q = query(wishlistCollection, where("uid","==",authCtx.uid));
    // const donationWishListData = await FireBaseFirestoreService.getDocumentsInArray("organization_wishlist");
    let donationWishListData = await getDocs(q);
    console.log(donationWishListData);
    // let array = donationWishListData.map((item) => ({
    //   ...item.data(),
    //   quantity: 0 
    // }));
    // setDonationWishList(array);
    donationWishListData.forEach((e)=>{
      console.log(e.data())
      setDonationWishList((prev)=>{return [...prev,e.data()]})
    });
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