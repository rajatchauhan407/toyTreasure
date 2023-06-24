import "./index.scss";
export default function OrgDataCard(){

    let orgData = [
        {
            imageUrl:"https://picsum.photos/400/400?rand=431",
            type: "Donors",
            count:256
        },
        {
            imageUrl:"https://picsum.photos/400/400?rand=432",
            type: "Donors",
            count:256
        },
        {
            imageUrl:"https://picsum.photos/400/400?rand=433",
            type: "Donors",
            count:256
        },
        {
            imageUrl:"https://picsum.photos/400/400?rand=434",
            type: "Donors",
            count:256
        }
    ]
    return (
        orgData.map((el) => <div className="card-wrapper">
                    <div className="img-wrapper">
                        <img src={el.imageUrl} alt="randompic"/>
                    </div>
                    <p>
                       {el.count}
                    </p>
                    <p>
                        Total {el.type}
                    </p>
               </div>)
    )
}