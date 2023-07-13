import './index.scss';
import React, { useContext } from "react";
import AuthContext from '../../services/auth-context';

export default function DashboardPoints() {
  const { user_points } = useContext(AuthContext); // Access the user_points value from AuthContext

  return (
    <div className="DashboardPoints">
      <div className="ContentPoints">
        <img src="https://picsum.photos/300" alt="coins-img" />
        <h3>Your Points</h3>
        <h3 className="point">{user_points}</h3>
      </div>
    </div>
  );
}

