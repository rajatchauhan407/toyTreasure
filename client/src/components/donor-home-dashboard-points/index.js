import './index.scss';
import coin from './coin-1.png'
import React, { useContext,useEffect, useState } from "react";
import AuthContext from '../../services/auth-context';
import {doc,onSnapshot } from 'firebase/firestore';
import { database } from '../../FirebaseConfig';
// import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
export default function DashboardPoints(props) {
  const authCtx = useContext(AuthContext);
  const [user_points, setUser_points] = useState(0);
  // console.log("status:"+props.donations.verificationStatus)
  useEffect(() => {
    const documentId = authCtx.uid;
    const collectionName = "user";
    const documentRef = doc(database, collectionName, documentId);

    // Subscribe to the Firestore document for real-time updates
    const unsubscribe = onSnapshot(documentRef, (doc) => {
      if (doc.exists()) {
        setUser_points(doc.data().user_points);
      } else {
        setUser_points(0);
      }
    }, (error) => {
      console.log(error);
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [authCtx.uid]);

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

