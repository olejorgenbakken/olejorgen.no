// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Language = {
  language: string,
  fluency: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Language>
) {
  res.status(200).json({ language: 'test', fluency: 'test' })
}
