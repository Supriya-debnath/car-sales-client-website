import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [logInError, setLogInError] = useState("");
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user);

                // save user to the database
                saveUser(user.email, user.displayName, "PUT");

                setLogInError("");
                const destination = location?.state?.from || "/dashboard";
                history.replace(destination);
            })
            .catch((error) => {
                setLogInError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // user registration
    const handleUserRegister = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((results) => {
                setError("");
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user to the database
                saveUser(email, name, "POST");

                // set name after register
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {})
                    .catch((error) => {});
                history.replace("/");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // user login
    const handleUserLogin = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((results) => {
                const redirect_uri = location?.state?.from || "/dashboard";
                history.push(redirect_uri);
                setLogInError("");
            })
            .catch((error) => {
                setLogInError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // user state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    // for admin
    useEffect(() => {
        fetch(`https://whispering-cliffs-17559.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.admin);
                setAdmin(data.admin)
            });
    }, [user.email]);

    // user logout
    const logOut = (history) => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                history.replace("/");
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setLoading(false));
    };
    // save user to database

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://whispering-cliffs-17559.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then();
    };
    return {
        user,
        setLoading,
        admin,
        handleUserRegister,
        signInWithGoogle,
        logOut,
        handleUserLogin,
        loading,
        error,
        logInError,
    };
};

export default useFirebase;













// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { useState, useEffect } from 'react';
// import initializeAuthentication from "../Login/Firebase/firebase.init";

//  initializeAuthentication()


// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     console.log(user);
//     const [authError, setAuthError] = useState('');

//     const [isLoading, setIsLoading] = useState(true);

//     const auth = getAuth();

//     function userRegister(newUserData, history){
//         const {name, email, password} = newUserData;

//         createUserWithEmailAndPassword(auth, email, password)
//         .then((result) => {
//             setUserName(name);
//             setUser(result.user);
//             history.replace('/')
//         })
//         .catch((err) => {
//            setAuthError( err.message);
//         })
//         .finally(() => setIsLoading(false));
//     }


//     // set user name
//         function setUserName(name){
//             updateProfile(auth.currentUser, {
//                 displayName: name,
//             })
//             .then(() => {})
//             .catch((err) => {})
//         }

// //         // login
// //   function userLogin({ email, password, history, redirect }) {
// //     setLoading(true);
// //     signInWithEmailAndPassword(auth, email, password)
// //       .then((result) => {
// //         setUser(result.user);
// //         history.replace(redirect);
// //       })

// //       .catch((err) => {
// //         setAuthError(err.message);
// //       })
// //       .finally(() => setLoading(false));
// //   }


//     const signInUsingGoogle = (history, location) => {
//         setIsLoading(true);
//         const googleProvider = new GoogleAuthProvider();

//         signInWithPopup(auth, googleProvider)
//             .then(result => {
//                 setUser(result.user);
//                 history.push(location.state?.from)
//                 sessionStorage.setItem("email", result.user.email);
//                 console.log(result.user.email);

//             })
//             .finally(() => setIsLoading(false));
//     }




//     // observe user state change
//     useEffect(() => {
//         const unsubscribed = onAuthStateChanged(auth, user => {
//             if (user) {
//                 setUser(user);
//             }
//             else {
//                 setUser({})
//             }
//             setIsLoading(false);
//         });
//         return () => unsubscribed;
//     }, [auth]);

//     const logOut = () => {
//         setIsLoading(true);
//         signOut(auth)
//             .then(() => { })
//             .finally(() => setIsLoading(false));
//     }

//     return {
//         user,
//         isLoading,
//         signInUsingGoogle,
//         logOut
//     }
// }

// export default useFirebase;