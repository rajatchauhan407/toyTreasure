import './index.scss';
export default function OrgMapDescCard(){
    return <div className="tt-62-map-charities-desc-container">
                <div className='tt-62-map-charities-desc'>
                    <div className='tt-62-image-wrapper'>
                        <img src="https://picsum.photos/300/300?random=234" alt="charities-profile"/>
                    </div>
                    <div className="tt-62-charity-desc">
                        <h3>BC CHildren Hospital</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum non nesciunt consequuntur adipisci sapiente delectus magnam fuga culpa. Corrupti deleniti ab nihil reiciendis aliquam!
                        </p>
                    </div>
                </div>
                <div className="tt-62-charity-timing">
                        <p>Received Donation Hours:</p>
                        <p>Monday-Sunday : 09:00-18:00</p>
                        <button>Donate Now</button>
                </div>
            </div>
}