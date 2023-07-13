import './index.scss';
import ProfileCategoryCard from '../donor-charity-profile-categories';

function CharityProfileCategoryCardWrapper({categories}) {
  return <div className='charityProfileCategoryCard'>
    <h1>Categories of Toys</h1>
    <p>These categories of toys are accepted by the charity.</p>
    <div className='charityProfileCategoryCardWrap'>
      <ProfileCategoryCard
        categories = {categories}
      />
    </div>
    </div>;
}

export default CharityProfileCategoryCardWrapper;
