import "./index.scss";

export default function DonationCategoryCard(props) {
  return (
    <div className="donationCategoryCardWrapper">
      <div className="donationCategoryCardImgWrapper">
      
        <img src={props.imageUrl} alt="" />
        <p className="donationCategoryCardPoints">{props.points}</p>
      </div>
      <div className="donationCategoryNumberInput">
        <button className="decrement">-</button>
        <input type="number" className="input-field" value="0" min="0" max="100" />
        <button className="increment">+</button>
      </div>
      <h4>{props.toyType}</h4>
      <p>{props.age}</p>
      <button>Add to Donate</button>
    </div>
  );
}