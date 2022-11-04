// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Project = {
  name: string,
  description: string,
  startDate: string,
  endDate: string,
  url: string,
  highlights?: string[],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project>
) {
  res.status(200).json({ name: 'test', description: 'test', startDate: 'test', endDate: 'test', url: 'test' })
}
