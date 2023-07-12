import "./index.scss";
import { useState, useEffect } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';

export default function ProfileCategoryCard() {
  const [profileCategory, setProfileCategory] = useState([]);

  async function getProfileCategoryData() {
    const profileCategoryData = await FireBaseFirestoreService.getDocumentsInArray("toys_categories");
    let array = profileCategoryData.map((item) => ({
      ...item,
      quantity: 0
    }));
    setProfileCategory(array);
  }

  useEffect(() => {
    getProfileCategoryData();
  }, []);

  return (
    <div className="donationCategoryCardWrapper">
      {profileCategory.map((el, index) => ( // Changed the variable name from 'donationWishList' to 'donationCategory'
        <div key={index}>
          <div className="donationCategoryCardImgWrapper">
            <img src={el.category_picture} alt="" />
            <p className="donationCategoryCardPoints">{el.category_points}</p>
          </div>
          <h4>{el.category_name}</h4>
          <p>{el.category_age}</p>
        </div>
      ))}
    </div>
  );
}

