import { db } from './firebase-admin';
import { compareDesc, parseISO } from 'date-fns';

export async function getAllFeedback(siteId) {
   try {
      const snapshot = await db
         .collection('feedback')
         .where('siteId', '==', siteId)
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

      const snapshot = await db.collection('sites').get();

      const sites = [];

      snapshot.forEach((doc) => {
         sites.push({ id: doc.id, ...doc.data() });
      });
      console.log(sites);
      
      return { sites };
   
}

export async function getUserSites(userId) {

   const snapshot = await db
      .collection('sites')
      .where('authorId', '==', userId)
      .get();

   const sites = [];

   snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
   });
   return { sites };
}

export async function getUserFeedback(userId) {

   const snapshot = await db
      .collection('feedback')
      .where('authorId', '==', userId)
      .get();

   const feedback = [];

   snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
   });
   return { feedback };
}
