import { createContext, useContext, useEffect, useState} from "react";
import { auth } from "../firebase/firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";



const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({});

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signOut() {
        return signOut(auth)
    }

    function logIn(auth, email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    })

    return (
        <AuthContext.Provider value={{user, signUp, googleSignIn, logIn, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}