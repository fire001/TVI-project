import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../firebase';
import { useEffect, useState } from "react";
export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('there is not auth provider')
    return context
};


export function AuthProvider({children}){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password, vehicle) => 
    createUserWithEmailAndPassword(auth, email, password, vehicle);
    
    const login = (email, password, vehicle) => 
    signInWithEmailAndPassword(auth, email, password, vehicle);

    const logout = () => signOut(auth);

    const loginWithGoogle =() => {
       const googleProvider = new GoogleAuthProvider()
       return signInWithPopup(auth, googleProvider)
    }
    
    const resetPassword = (email) => sendPasswordResetEmail(auth, email);
    
    useEffect(() =>{
      const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
                console.log({currentUser});
                setUser(currentUser);
                setLoading(false);
                });
                return () => unsuscribe();
    }, []);
    

    return (
    <authContext.Provider value={{signup, login, user, logout, loading, loginWithGoogle, resetPassword}}>{children}</authContext.Provider>
    );
}