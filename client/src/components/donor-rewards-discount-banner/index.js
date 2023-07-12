import './index.scss';

export default function DiscountCard(props){
    return(
        <div className="discCard">
             {/* <div className="imageBanner"> */}
                {/* <img src={props.url} alt="" /> */}
            {/* </div>            */}
            <div className="infoBanner">
                <h2>{props.info}</h2>
                <h3 className="Discount">{props.discount}</h3>
                <p>{props.req}</p>
            </div>
           
        </div>
    )
}