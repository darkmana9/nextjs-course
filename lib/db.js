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
   const site = firestore.collection('sites').doc();
   site.set(data);
 
   return site;
};

export const createFeedback = (data) => {
   const feedback = firestore.collection('feedback').doc();
   feedback.set(data);
 
   return feedback;
};

export const deleteFeedback = (id) => {
   firestore.collection('feedback').doc(id).delete();
};
