import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [spinner, setSpinner] = useState(true);
    const [users, setUsers] = useState(null);
    const createUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth)
    };
    // login with google
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);

    }

    // 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, []);


    // Load all Data


    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://cook-with-us-server-golam-kibriya123.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
        setSpinner(false)
    }, []);

    // hok for recipe id
    const [recipeId, setRecipeId] = useState(0);

    const authInfo = {
        users,
        spinner,
        createUsers,
        userLogin,
        googleLogin,
        logOut,
        chefs,
        setRecipeId,
        recipeId

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProviders;