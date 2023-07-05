import './index.scss';

export default function discountCard(props){
    return(
        <div className="discountCard">
            <div className="imageBanner">
                <img src="https://picsum.photos/200/200?random=567" alt="" />
            </div>
            <div className="infoBanner">
                <h2>Get the best cuddle in the whole wide world for your kid</h2>
                <h3 className="Discount">20% off </h3>
                <p>on your first order</p>
            </div>
        </div>
    )
}