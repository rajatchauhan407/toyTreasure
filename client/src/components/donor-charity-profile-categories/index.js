import './index.scss';
import { useState, useEffect } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';

function CharityProfileCategoryCard() {
  const [orgCategory, setOrgCategory] = useState([]);

  async function getOrgCategoryData() {
    const orgCategoryData = await FireBaseFirestoreService.getDocumentsInArray("toys_categories");
    let array = orgCategoryData.map((item) => ({
      ...item,
      quantity: 0
    }));
    setOrgCategory(array);
  }

  useEffect(() => {
    getOrgCategoryData();
  }, []);

  return (
    <div className="CharityProfileCategoryCardWrapper">
      {orgCategory.map((el, index) => (
        <div key={index} className="CharityProfileCategoryCardImgWrapper">
          <div className="CharityProfileCategoryCardImgWrapper">
            <img src={el.category_picture} alt="" />
            <p className="CharityProfileCategoryCardPoints">{el.category_points}</p>
          </div>
          <h4>{el.category_name}</h4>
          <p>{el.category_age}</p>
        </div>
      ))}
    </div>
  );
}

export default CharityProfileCategoryCard();
