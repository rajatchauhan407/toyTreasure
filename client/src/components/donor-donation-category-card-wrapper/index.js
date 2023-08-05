import './index.scss';
import DonationCategoryCard from '../donor-donation-category-card';

function DonationCategoryCardWrapper({onGetCat}) {

  // let donationCategoryCardData = [
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=431',
  //     points: 50,
  //     toyType: "stuffed Animal",
  //     age: "1-5 Years",
  //   },
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=432',
  //     points: 30,
  //     toyType: "stuffed Animal",
  //     age: "1-5 Years",
  //   },
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=433',
  //     points: 40,
  //     toyType: "stuffed Animal",
  //     age: "1-5 Years",
  //   },
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=434',
  //     points: 60,
  //     toyType: "stuffed Animal",
  //     age: "1-5 Years",
  //   },
  // ];

  // const donationCategoryCardDatasList = donationCategoryCardData.map((el) => (
  //   <DonationCategoryCard imageUrl={el.imageUrl} points={el.points} toyType={el.toyType} age={el.age} />
  // ));
  function saveCategories(data){
    console.log(data);
    onGetCat(data);
  }
  return <div className='donorDonationCategoryCardWrapper'>
    <h1>Choose a Category to Donate</h1>
    <p>Make a valuable contribution by selecting a toy category and quantity to donate, even if it's not in the wishlist! </p>
    <div className='donorDonationCategoryCardWrap'>
      <DonationCategoryCard
        onGetCategories={saveCategories}
      />
    </div>
    </div>;
}

export default DonationCategoryCardWrapper;