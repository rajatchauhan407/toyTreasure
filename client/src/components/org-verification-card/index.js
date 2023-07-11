import "./index.scss";

export default function OrgVerificationCard(){

    let orgVerificationData = [
        {
            animalType:"Stuffed Animal",
            date:"23-05-89",
            name:"Greg Thomas"
        },
        {
            animalType:"Stuffed Animal",
            date:"23-05-89",
            name:"Greg Thomas"
        },
        {
            animalType:"Stuffed Animal",
            date:"23-05-89",
            name:"Greg Thomas"
        },
        {
            animalType:"Stuffed Animal",
            date:"23-05-89",
            name:"Greg Thomas"
        }
    ];
    return (
            orgVerificationData.map((el)=>{
                return <div className="verification-card-wrapper">
                    <h4>{el.animalType}</h4>
                    <div className="verification-date-button">
                        <p>{el.date} - From wishlist</p>
                        <button>
                            Verify
                        </button>
                    </div>
                    <div className="icon-author">
                        <i className="fa-solid fa-user"></i>
                        <p>{el.name}</p>
                    </div> 
                </div>
            })
    )
}
