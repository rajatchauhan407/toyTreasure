import './index.scss';

export default function DonorHomeDashboardMap(){
    return(
    <div className="donorHomeDashboardMap">
            
            <a className='donorMapImage1' href="#">
             <img src="https://picsum.photos/400/400?rand=434" alt="Organization Name" />
            </a>

            <a className='donorMapImage2' href="#">
             <img src="https://picsum.photos/400/400?rand=431" alt="Organization Name" />
            </a>

            <a className='donorMapImage3' href="#">
             <img src="https://picsum.photos/400/400?rand=433" alt="Organization Name" />
            </a>

            <a className='donorMapImage1' href="#">
             <img src="https://picsum.photos/400/400?rand=432" alt="Organization Name" />
            </a>

            <h2>Explore nearby charity centers and be the reason for someones happiness.</h2>
            
            <button>Donate now to the nearest charity</button>

    </div>
    )
}