import "./index.scss";

export default function CharityProfileCategoryCard(props) {
  return (
    <div className="CharityProfileCategoryCardWrapper">
      <div className="CharityProfileCategoryCardImgWrapper">
        <img src={props.imageUrl} alt="" />
        <p className="CharityProfileCategoryCardPoints">{props.points}</p>
      </div>
      <h4>{props.toyName}</h4>
      <p>{props.toyType}</p>
    </div>
  );
}
