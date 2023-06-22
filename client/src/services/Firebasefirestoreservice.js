import {database} from "../FirebaseConfig";
import {addDoc,collection} from 'firebase/firestore';   
import "firebase/firestore";
const createDocument = (collectionName,document)=>{
    try {
        return addDoc(collection(database,collectionName),document);   
    } catch (error) {
            console.log("Error Adding the document",error);
    }
}

const FireBaseFirestoreService = {
    createDocument
}

export default FireBaseFirestoreService;