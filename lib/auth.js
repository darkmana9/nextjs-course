import { createContext, useContext, useEffect, useState } from 'react';
import firebase from './firebase';
import { createUser } from './db';
import cookie from 'js-cookie'
import  Router from 'next/router';

const authContext = createContext();

export function AuthProvider({ children }) {
   const auth = useAuthProvider();
   return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
   return useContext(authContext);
};

function useAuthProvider() {
   const [user, setUser] = useState(null);

   const handleUser = (rawUser) => {
      if (rawUser) {
         const user = formatUser(rawUser);
         const { token, ...userWithoutToken } = user;
         createUser(user.uid, userWithoutToken);
         setUser(user);
 
 cookie.set('fast-feedback-auth', true, {
            expires: 1
         });
         return user;
      } else {
         setUser(false);
         cookie.remove('fast-feedback-auth')
         return false;
      }
   };

   const signInWithGitHub = () => {
      Router.push('/dashboard')
      return firebase
         .auth()
         .signInWithPopup(new firebase.auth.GithubAuthProvider())
         .then((response) => handleUser(response.user));
   };

   const signInWithGoogle = () => {
      Router.push('/dashboard')
      return firebase
         .auth()
         .signInWithPopup(new firebase.auth.GoogleAuthProvider())
         .then((response) => handleUser(response.user));
   };

   const signout = () => {
      return firebase
         .auth()
         .signOut()
         .then(() => handleUser(false));
   };

   useEffect(() => {
      const unsubscribe = firebase
         .auth()
         .onAuthStateChanged((user) => handleUser(user));

      return () => unsubscribe();
   }, []);

   return {
      user,
      signInWithGitHub,
      signInWithGoogle,
      signout
   };
}

const formatUser = (user) => {
   return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      token: user._delegate.accessToken,
      provider: user.providerData[0].providerId,
      photoUrl: user.photoURL
   };
};
