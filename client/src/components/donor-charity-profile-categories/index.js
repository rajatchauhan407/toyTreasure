import "./index.scss";
// import { useState, useEffect } from 'react';
// import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
// import GeneralMultipleSlider from "../containers/general-multiple-slider";
export default function ProfileCategoryCard({categories}) {
  console.log(categories)
  // const [profileCategory, setProfileCategory] = useState([]);

  // async function getProfileCategoryData() {
  //   const profileCategoryData = await FireBaseFirestoreService.getDocumentsInArray("toys_categories");
  //   let array = profileCategoryData.map((item) => ({
  //     ...item,
  //     quantity: 0
  //   }));
  //   setProfileCategory(array);
  // }

  // useEffect(() => {
  //   getProfileCategoryData();
  // }, []);
  let cards = categories.map((el, index) => ( // Changed the variable name from 'donationWishList' to 'donationCategory'
  <div className="charityProfileCategoryCardBGC" key={index}>
    <div className="charityProfileCategoryCardImgWrapper">
      <img src={el.category_picture} alt="" />
      <p className="charityProfileCardPoints">
        <span>{el.category_points}</span> <br></br>points 
      </p>
    </div>
    <h5>{el.category_name}</h5>
    <p>{el.category_age}</p>
  </div>
));
  return (
    <div className="charityProfileCategoryCardwrapper">
      {/* <GeneralMultipleSlider cards={cards}/> */}
      {cards}
    </div>
  );
}

