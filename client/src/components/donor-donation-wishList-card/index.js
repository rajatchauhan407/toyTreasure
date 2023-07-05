import "./index.scss";

export default function DonationWishListCard(props) {
  return (
    <div className="donationWishListCardWrapper">
      <div className="donationWishListCardImgWrapper">
      <p className="donationWishListCardPoints">{props.points}</p>
        <img src={props.imageUrl} alt="" />
        <p>This is the reference image.</p>
      </div>
      <div className="donationWishListNumberInput">
        <button className="decrement">-</button>
        <input type="number" className="input-field" value="0" min="0" max="100" />
        <button className="increment">+</button>
      </div>
      <h4>{props.toyName}</h4>
      <p>{props.toyType}</p>
    </div>
  );
}
