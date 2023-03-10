import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase.init';



const auth = getAuth(app)

export const authProvider = createContext();



const AuthContext = ({ children }) => {

    //state for hold user
    const [user, setuser] = useState(null)

    //state for loader
    const [loader, setLoader] = useState(true)

    //google signin
    const googleSignin = (provider) => {
        setLoader(true);
        return signInWithPopup(auth, provider)
    }

    //phone signin
    const phone = (phone, appVerifier) => {
        setLoader(true)
        return signInWithPhoneNumber(auth, phone, appVerifier)
    }

    //generate recapcha
    const recapcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        }, auth);
    }

    //registration
    const signUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //hold a user
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setuser(currentUser)
            console.log('current User:', currentUser)
            setLoader(false)
        })

        return () => {

            unsubscribe()
        }

    }, [])



    //set display name
    const updateUser = (name) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {

            displayName: name,
        })

    }


    //logout
    const logout = () => {

        setLoader(true)
        localStorage.removeItem('token')
        return signOut(auth)
    }


    const authInfo = {
        googleSignin,
        signUp,
        login,
        updateUser,
        logout,
        user,
        loader,
        auth,
        phone,
        recapcha
    }
    return (
        <div>
            <authProvider.Provider value={authInfo}>
                {children}
            </authProvider.Provider>
        </div>
    );
};

export default AuthContext;