import type { NextApiRequest, NextApiResponse } from 'next'

type Link = {
  name: string,
  url: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Link>
) {
  res.status(200).json({ name: 'test', url: 'test' })
}
