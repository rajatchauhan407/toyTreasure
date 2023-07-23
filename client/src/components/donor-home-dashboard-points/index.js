import './index.scss';
import coin from './coin-1.png'
import React, { useContext,useEffect, useState } from "react";
import AuthContext from '../../services/auth-context';
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
export default function DashboardPoints(props) {
  const authCtx = useContext(AuthContext);
  const [user_points, setUser_points] = useState(0);
  // console.log("status:"+props.donations.verificationStatus)
  useEffect(()=>{
    async function getUserPoints(){
      try{
          const data = await FireBaseFirestoreService.getDocumentById('user',authCtx.uid);
          setUser_points(data.data().user_points);
      }catch(error){
        console.log(error)
      }
    }
    getUserPoints();
  },[setUser_points, user_points, authCtx.uid]);

  return (
    <div className="DashboardPoints">
    
      <div className="ContentPoints">
        <img src={coin} alt="coins-img" />
        <h3 className='body1'>Your Points:</h3>
        <h2 className="point">{user_points}</h2>
      </div>

    </div>
  );
}

