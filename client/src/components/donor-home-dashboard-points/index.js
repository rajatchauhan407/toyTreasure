import './index.scss';
import coin from './coin-1.png'
import React, { useContext } from "react";
import AuthContext from '../../services/auth-context';

export default function DashboardPoints() {
  const { user_points } = useContext(AuthContext); // Access the user_points value from AuthContext

  return (
    <div className="DashboardPoints">
      <div className="ContentPoints">
        <img src={coin} alt="coins-img" />
        <h3 className='body1'>your points:</h3>
        <h2 className="point">{user_points}</h2>
      </div>
    </div>
  );
}

