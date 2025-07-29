import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { password } = req.body;
  if (password === process.env.MAINTENANCE_ADMIN_PASSWORD) {
    res.setHeader('Set-Cookie', `auth-cookie=true; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`);
    res.status(200).end();
  } else {
    res.status(401).end();
  }
}