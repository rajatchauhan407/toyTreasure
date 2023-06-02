import "./index.css"
export default function Card(props){
    return(
        <div className="cardWrapper">
            <div>
                <img src="https://picsum.photos/400/400?rand=2"></img>
            </div>
            <div>
                <h3>
                    {props.heading}
                </h3>
                <p>
                    {props.age}
                </p>
            </div>
        </div>
    )
}