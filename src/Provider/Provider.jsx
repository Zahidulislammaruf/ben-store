import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const Provider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading,setloading] = useState(true)
    useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser)  
          setloading(false)
        });
        return () =>{
            return unsubscribe

        }
    },[])

    const createUser = (email,password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
        }
    const logOut = ()=>{
        setloading(true)
        return signOut(auth)

        }
    const updateUser = (name,photo) =>{
        return  updateProfile(auth.currentUser,{
             displayName: name, 
             photoURL: photo
          })
       }
    const googleProvider = new GoogleAuthProvider()
     
    const googleSingIn = () =>{
         setloading(true)
          return signInWithPopup(auth, googleProvider)
       }

    


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUser,
        googleSingIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;