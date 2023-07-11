import './index.scss';

export default function DashboardPoints({ points }) {
  return (
    <div className='DashboardPoints'>
      <div className="ContentPoints">
        <img src="" alt="coins-img" />
        <h3>Your Points</h3>
        <h3 className="point">{points}</h3>
      </div>
    </div>
  );
}
