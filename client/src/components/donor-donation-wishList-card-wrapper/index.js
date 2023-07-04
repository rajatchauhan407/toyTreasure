import './index.scss';
import DonationWishListCard from '../donor-donation-wishList-card';

function DonationWishListCardWrapper() {
  let donationWishListCardData = [
    {
      imageUrl: 'https://picsum.photos/400/400?rand=431',
      points: 50,
      toyName: "Teddy Bear",
      toyType: "stuffed Animal",
    },
    {
      imageUrl: 'https://picsum.photos/400/400?rand=432',
      points: 30,
      toyName: "Teddy Bear",
      toyType: "stuffed Animal",
    },
    {
      imageUrl: 'https://picsum.photos/400/400?rand=433',
      points: 40,
      toyName: "Teddy Bear",
      toyType: "stuffed Animal",
    },
    {
      imageUrl: 'https://picsum.photos/400/400?rand=434',
      points: 60,
      toyName: "Teddy Bear",
      toyType: "stuffed Animal",
    },
  ];

  const donationWishListCardDatasList = donationWishListCardData.map((el) => (
    <DonationWishListCard imageUrl={el.imageUrl} points={el.points} toyName={el.toyName} toyType={el.toyType} />
  ));
  return <div className='homeDashboardRewardsCardwrapper'>{donationWishListCardDatasList}</div>;
}

export default DonationWishListCardWrapper;