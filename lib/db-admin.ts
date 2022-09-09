import firebase from './firebase-admin';
import { compareDesc, parseISO } from 'date-fns';

export async function getAllFeedback(seteId) {
   try {
      const snapshot = await firebase
         .collection('feedback')
         .where('siteId', '==', seteId)
         .get();

      const feedback = [];

      snapshot.forEach((doc) => {
         feedback.push({ id: doc.id, ...doc.data() });
      });
      feedback.sort((a, b) =>
         compareDesc(parseISO(a.createAt), parseISO(b.createAt))
      );
      return { feedback };
   } catch (error) {
      return { error };
   }
}

export async function getAllSites() {
   try {
      const snapshot = await firebase.collection('sites').get();

      const sites = [];

      snapshot.forEach((doc) => {
         sites.push({ id: doc.id, ...doc.data() });
      });
      return { sites };
   } catch (error) {
      return { error };
   }
}
