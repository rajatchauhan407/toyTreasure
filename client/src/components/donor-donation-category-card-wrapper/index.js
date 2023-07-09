import './index.scss';
import DonationCategoryCard from '../donor-donation-category-card';

function DonationCategoryCardWrapper() {
  let donationCategoryCardData = [
    {
      imageUrl: 'https://picsum.photos/400/400?rand=431',
      points: 50,
      toyType: "stuffed Animal",
      age: "1-5 Years",
    },
    {
      imageUrl: 'https://picsum.photos/400/400?rand=432',
      points: 30,
      toyType: "stuffed Animal",
      age: "1-5 Years",
    },
    {
      imageUrl: 'https://picsum.photos/400/400?rand=433',
      points: 40,
      toyType: "stuffed Animal",
      age: "1-5 Years",
    },
    {
      imageUrl: 'https://picsum.photos/400/400?rand=434',
      points: 60,
      toyType: "stuffed Animal",
      age: "1-5 Years",
    },
  ];

  const donationCategoryCardDatasList = donationCategoryCardData.map((el) => (
    <DonationCategoryCard imageUrl={el.imageUrl} points={el.points} toyType={el.toyType} age={el.age} />
  ));
  return <div className='donorDonationCategoryCardWrapper'>
    <h1>Categories</h1>
    <p>Choose a category to donate if you can not find in wishlist.</p>
    <div className='donorDonationCategoryCardWrap'>
    {donationCategoryCardDatasList}
    </div>
    </div>;
}

export default DonationCategoryCardWrapper;