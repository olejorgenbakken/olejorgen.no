// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Education = {
  institution: string,
  area: string,
  studyType: string,
  startDate: string,
  endDate: string,
}

type Language = {
  language: string,
  fluency: string,
}

type Link = {
  name: string,
  url: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Education>
) {
  res.status(200).json({ institution: 'test', area: 'test', studyType: 'test', startDate: 'test', endDate: 'test' })
}
