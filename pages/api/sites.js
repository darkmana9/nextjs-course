import { auth } from '../../lib/firebase-admin';
import { getUserSites } from '../../lib/db-admin';
import { logger, formatObjectKeys } from '@/utils/logger';

export default async function handler(req, res) {
   try {
      const token = req.headers.token;
      const { uid } = await auth.verifyIdToken(token);
      const { sites, error } = await getUserSites(uid);

      res.status(200).json({ sites });
   } catch (error) {

      logger.error(
         {
            request: {
               headers: formatObjectKeys(req.headers),
               url: req.url,
               method: req.method
            },
            response: {
               statusCode: res.statusCode
            }
         },
         error.message
      );
      res.status(500).json({ error });
   }
}
