import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Here we would handle the contact form submission
    // For example, we could send an email with the contact information
    // Or we could store the contact information in a database
    // For now, we will just return a success status
    res.status(200).json({ message: 'Contact form submitted successfully' });
  } else {
    // If the method is not POST, return an error
    res.status(405).json({ message: 'Method not allowed' });
  }
}