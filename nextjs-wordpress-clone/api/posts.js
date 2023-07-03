import { NextApiRequest, NextApiResponse } from 'next'

// Mock data for blog posts
const posts = [
  {
    id: '1',
    title: 'La longevidad y sus secretos',
    content: 'Contenido del blog post...',
    slug: 'la-longevidad-y-sus-secretos',
  },
  {
    id: '2',
    title: 'Cómo vivir más y mejor',
    content: 'Contenido del blog post...',
    slug: 'como-vivir-mas-y-mejor',
  },
  // Add more posts as needed
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(posts)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}