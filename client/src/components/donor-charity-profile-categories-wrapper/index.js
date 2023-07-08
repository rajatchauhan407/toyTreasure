import './index.scss';
import CharityProfileCategoryCard from '../donor-charity-profile-categories';

function CharityProfileCategoryCardWrapper() {
  let charityProfileCategoryCardData = [
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

  const charityProfileCategoryCardDatasList = charityProfileCategoryCardData.map((el) => (
    <CharityProfileCategoryCard imageUrl={el.imageUrl} points={el.points} toyName={el.toyName} toyType={el.toyType} />
  ));
  return <div className='charityProfileCategoryCardwrapper'>{charityProfileCategoryCardDatasList}</div>;
}

export default CharityProfileCategoryCardWrapper;