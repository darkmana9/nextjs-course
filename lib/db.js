import firebase from './firebase';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

export const createUser = (uid, data) => {
   return firestore
      .collection('users')
      .doc(uid)
      .set({ uid, ...data }, { merge: true });
};

export const createSite = (data) => {
   return firestore.collection('sites').add({ data });
};