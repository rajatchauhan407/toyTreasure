import './index.css';
export default function Card(props){
    return(
        <div className="cardWrapper">
            <div>
                <img src="https://picsum.photos/400/400?rand=435" alt="randomimage" />
            </div>
            <div>
                <h3>
                    {props.heading}
                </h3>
                <p>
                    {props.agelimit}
                </p>
            </div>
        </div>
    )
}