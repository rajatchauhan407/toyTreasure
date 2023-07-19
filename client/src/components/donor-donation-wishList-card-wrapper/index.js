import './index.scss';
import { Link,Navigate, useNavigate, useParams } from 'react-router-dom';
import DonationWishListCard from '../donor-donation-wishList-card';
import { useEffect, useState, useContext } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
import AuthContext from '../../services/auth-context';
import vectore from './Vector-wishlist.png'

function DonationWishListCardWrapper({requiredCategories}) {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const[finalCat, setFinalCat] = useState([]);
  const[finalWishlist, setFinalWishlist] = useState([]);
  const[totalToys, setTotalToys] = useState(0);
  const{id} = useParams()
  useEffect(()=>{
    setFinalCat(requiredCategories);
  },[requiredCategories]);

  // getting the total toys in wishlist
  function getTotalToys(finalCat, finalWishlist){
    let count = 0;
    finalCat.forEach((el)=>{
      count = count + el.quantity;
    });

    finalWishlist.forEach((el)=>{
      count = count + el.quantity;
    })
    setTotalToys(count);
  }

  // calling it when changed
  useEffect(()=>{
    getTotalToys(finalCat, finalWishlist);
  },[finalCat, finalWishlist]) 


  function getDonationListData(data){
    setFinalWishlist(data);
   }
   async function storeDataInCart(data){
    let filteredWishlist = [];
    finalWishlist.forEach((el)=>{if(el.quantity >0) filteredWishlist.push(el)})
    console.log(filteredWishlist);
    let document = {
      wishlist:filteredWishlist,
      categories:finalCat,
      status:"pending",
      uid:authCtx.uid
    }
    authCtx.setUserCartData(document);
    // await FireBaseFirestoreService.createDocument('donations',document);
    navigate('/donation/confirmation/'+id);
   }
  // let donationWishListCardData = [
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=431',
  //     points: 50,
  //     toyName: "Teddy Bear",
  //     toyType: "stuffed Animal",
  //   },
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=432',
  //     points: 30,
  //     toyName: "Teddy Bear",
  //     toyType: "stuffed Animal",
  //   },
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=433',
  //     points: 40,
  //     toyName: "Teddy Bear",
  //     toyType: "stuffed Animal",
  //   },
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=434',
  //     points: 60,
  //     toyName: "Teddy Bear",
  //     toyType: "stuffed Animal",
  //   },
  // ];

  // const donationWishListCardDatasList = donationWishListCardData.map((el) => (
  //   <DonationWishListCard imageUrl={el.imageUrl} points={el.points} toyName={el.toyName} toyType={el.toyType} />
  // ));
 

  return <div className='donorWishListCardWrapper'>
    <div className='proceedToDonateTagLine'>
      <h3>Select the toys you want to donate.</h3>
      <button className='proceedButton' onClick={storeDataInCart}><span className="proceedBefore">{totalToys}</span><h5>Proceed to Donate</h5></button>
      </div>
    
    
    <div className='wishListTitle'>
    <h1>Wishlists</h1>
    <img src={vectore} alt='WishList sign'/>
    </div>
    
    <div className='donorWishListCardWrap'>
      <DonationWishListCard
        onDonationWishlist={getDonationListData}
      />
    </div>
    </div>;
}

export default DonationWishListCardWrapper;