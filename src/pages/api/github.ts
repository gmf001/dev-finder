import { getUserData } from '@/lib/github';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { username } = req.query;
      if (typeof username !== 'string') {
        return res.status(500).send('invalid request');
      }
      const user = await getUserData(username);
      return res.status(200).send(user);
    } catch (e) {
      console.log(e);
      return res.status(500).send('bad request');
    }
  }

  return res.status(404).end();
}
