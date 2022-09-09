import { getAllFeedback } from '@/lib/db-admin';
import {auth} from '../../lib/firebase-admin';

export default async function handler(req, res) {
   const { feedback, error } = await getAllFeedback(req.query.siteId);
   
   if (error) {
      res.status(500).json({ error });
   }
   res.status(200).json({ feedback });
}
