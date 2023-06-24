import app from '../FirebaseConfig';
import {getAuth,
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut,
        sendPasswordResetEmail,
        GoogleAuthProvider,
        signInWithPopup,
        // signInWithRedirect,
        // getRedirectResult,
        // linkWithPopup,
        // linkWithRedirect,
        onAuthStateChanged
        } from 'firebase/auth'
const auth = getAuth(app);
const registerUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email, password);
};

const loginUser = (email,password)=>{
    signInWithEmailAndPassword(auth,email,password);
}

const logoutUser = ()=>{
    return signOut();
};

const PasswordResetEmail = (email)=>{
    return sendPasswordResetEmail(auth,email);
}

const loginWithGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

const subscribeToAuthChanges = (handleAuthChange)=>{
    onAuthStateChanged(auth, (user)=>{
        handleAuthChange(user);
    });
}


const FireBaseAuthService = {
    registerUser,
    loginUser,
    logoutUser,
    PasswordResetEmail,
    loginWithGoogle,
    subscribeToAuthChanges,
    auth
}
export default FireBaseAuthService;