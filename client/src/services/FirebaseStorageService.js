import app from '../FirebaseConfig';
import { getDownloadURL, getStorage, uploadBytes} from "firebase/storage";

const storage = getStorage(app);


// const createRef = ()=>{
//     const storage = getStorage(app);
//     return ref(storage,'images/hello');
// }

// const storageRef = ref(storage,'test/image');

const uploadFileAndGetUrl = async (file,ref)=>{
    await uploadBytes(ref,file);
    return await getDownloadURL(ref);
}   

const FirebaseStorageService = {
    uploadFileAndGetUrl,
    storage
}
export default FirebaseStorageService;