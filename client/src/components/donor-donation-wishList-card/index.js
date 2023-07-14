import "./index.scss";
import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
// import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { database } from "../../FirebaseConfig";


export default function DonationWishListCard({onDonationWishlist}) {
  const [donationWishList, setDonationWishList] = useState([]);
  const [donations, setDonations] = useState([])
  const {id} = useParams();
  async function getDonationWishListData() {
    const wishlistCollection = collection(database,"organization_wishlist");
    let q = query(wishlistCollection, where("profile_id","==",id));
    // const donationWishListData = await FireBaseFirestoreService.getDocumentsInArray("organization_wishlist");
    let donationWishListData = await getDocs(q);
    console.log(donationWishListData.docs);
    // let array = donationWishListData.map((item) => ({
    //   ...item.data(),
    //   quantity: 0 
    // }));
    // setDonationWishList(array);
    donationWishListData.forEach((e)=>{
      console.log(e.data());
      const obj ={...e.data(), quantity:0}
      setDonationWishList((prev)=>{return [...prev,obj]});
      console.log(obj);   
    });
    
  }

  const handleDecrement = (index) => {
    setDonationWishList((prevList) => {
      const newList = [...prevList];
      newList[index].quantity = Math.max(newList[index].quantity - 1, 0);
      console.log(newList);
      return newList;
    });
    setDonations(donationWishList);
  };

  const handleIncrement = (index) => {
    setDonationWishList((prevList) => {
      const newList = [...prevList];
      newList[index].quantity = Math.min(newList[index].quantity + 1, newList[index].org_w_toys_required);
      console.log(newList);
      return newList;
    });
    setDonations(donationWishList);
  };

  useEffect(() => {
    getDonationWishListData();
  }, []);
  onDonationWishlist(donationWishList);

  return (
    <div className="wrapperBugFinder">
      {donationWishList.map((el, index) => (
        <div className="donationWishListCardWrapper">
          <div className="donationWishListCardImgWrapper">
            <p className="donationWishListCardPoints"><span>{el.org_w_toys_points}</span> <br></br>points</p>
            <img src={el.org_w_toy_picture} alt="" />
            <p>This is the reference image.</p>
          </div>
          <div className="donationWishListNumberInput">
            <button className="decrement" onClick={() => handleDecrement(index)}>-</button>
            <input type="number" className="input-field" value={el.quantity} min="0" max={el.org_w_toys_required} readOnly />
            <button className="increment" onClick={() => handleIncrement(index)}>+</button>
          </div>
          <h3>{el.org_w_toy_name}</h3>
          <p className="donorWishListToyCategory">Stuffed Animal{el.org_w_toy_category}</p>
        </div>
      ))}
    </div>
  );
}