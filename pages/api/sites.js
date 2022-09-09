import { auth } from '../../lib/firebase-admin';
import { getUserSites } from '../../lib/db-admin';

export default async function handler(req, res) {
   try {
      const token = req.headers.token;
      const { uid } = await auth.verifyIdToken(token);
      const { sites, error } = await getUserSites(uid);

      res.status(200).json({ sites });
   } catch (error) {
      res.status(500).json({ error });
   }
   console.log(uid);
}
