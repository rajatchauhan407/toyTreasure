import './index.scss';
import ProfileCategoryCard from '../donor-charity-profile-categories';

function CharityProfileCategoryCardWrapper({categories}) {
  return <div className='charityProfileCategoryCard'>
    <h1>Categories of Toys</h1>
    <p>Choose the category to donate if you can not find in wishlist.</p>
    <div className='charityProfileCategoryCardWrap'>
      <ProfileCategoryCard
        categories = {categories}
      />
    </div>
    </div>;
}

export default CharityProfileCategoryCardWrapper;
