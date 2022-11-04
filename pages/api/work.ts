import type { NextApiRequest, NextApiResponse } from 'next'

type Work = {
  business: string,
  position: string,
  startDate: string,
  endDate: string,
  summary?: string,
  highlights?: string[],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Work>
) {
  res.status(200).json({ business: 'test', position: 'test', startDate: 'test', endDate: 'test' })
}
