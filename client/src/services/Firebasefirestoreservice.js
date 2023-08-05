import {database} from "../FirebaseConfig";
import {addDoc,
        collection,
        getDocs,
        getDoc,
        doc,
        updateDoc,
        setDoc,
    deleteDoc} from 'firebase/firestore';   
import "firebase/firestore";

// add document in the firestore. Accepts collection name and document object as parametres and returns the execution of the function so that it can be used further.
const createDocument = (collectionName,document)=>{
    try {
        return addDoc(collection(database,collectionName),document);   
    } catch (error) {
            console.log("Error Adding the document",error);
    }
}

// retrieving documents of a collection. Returns an array.
const getDocumentsInArray = async (collectionName)=>{
    try {
        let arr = [];
        let snapShot = await getDocs(collection(database,collectionName));
        snapShot.forEach((doc)=>{
            arr.push({
                   id:doc.id,
                ...doc.data()
            });
        });
        return arr;
    } catch (error) {
        console.log("Error getting the documents", error);
    }
}


// Get all the documents without an array 
async function getDocuments(collectionName){
    try {
        return getDocs(collection(database,collectionName))
    } catch (error) {
        console.log("Error getting Documents!!", error)
    }
}

// FInd a particular document using ID
function getDocumentById(collectionName, documentId){
    try{
        return getDoc(doc(collection(database,collectionName),documentId));
    }catch(error){
        console.log(error);
    }
}
function getDocumentRefById(collectionName, documentId){
    return doc(collection(database,collectionName),documentId);
}

// Update a document 
   async function updateDocumentById(collectionName, documentId, updatedData){
        try {
            let docRef = doc(database, collectionName, documentId);
            return await updateDoc(docRef, updatedData)
        } catch (error) {
            console.log("Error while updating Data", error);
        }
    }
//Setting a document which overwrites or add in the previous data
    async function settingDocument(collectionName,docId, document){
            try{
                let docRef = setDoc(doc(database,collectionName,docId),document);
                console.log(docRef);    
            }catch(error){
                console.log("Error while Setting Data", error);
            }
    }
    // Deleting a function from Firebase
    async function deleteDocumentById(collectName,docId){
        const docRef= doc(database,collectName,docId);
        return deleteDoc(docRef);
    }
const FireBaseFirestoreService = {
    createDocument,
    getDocumentsInArray,
    getDocuments,
    getDocumentById,
    updateDocumentById,
    settingDocument,
    deleteDocumentById,
    getDocumentRefById}



export default FireBaseFirestoreService;