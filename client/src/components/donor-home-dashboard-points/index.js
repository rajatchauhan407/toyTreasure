import './index.scss';

export default function DashboardPoints(points){
    return (
       <div className='DashboardPoints'>
            <img src="" alt="" />
            <h3>Your Points</h3>
            <div className='Points'>
                <p>{points}</p>
            </div>
       </div>
    );
}