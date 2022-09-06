import React from 'react';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

export default function Home() {
   const auth = useAuth();
   return (
      <div className={styles.container}>
         <main className={styles.main}>
            <button
               onClick={() => {
                  auth.signInWithGitHub();
               }}
            >
               Sign in
            </button>
            <div> {auth?.user?.email} </div>
            {auth?.user && (
               <button onClick={(e) => auth.signout()}>Sign Out</button>
            )}
         </main>
      </div>
   );
}
