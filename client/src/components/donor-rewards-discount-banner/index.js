import './index.scss';

export default function DiscountCard(props){
    return(
        <div className="discCard">
             <div className="imageBanner">
                {/* background image in SASS */}
            </div>           
            <div className="infoBanner">
                <h2 className='custom-heading'>{props.info}</h2>
                <h3 className="custom-discount">{props.discount}</h3>
                <p className='custom-text'>{props.req}</p>
            </div>
           
        </div>
    )
}