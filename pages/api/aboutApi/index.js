import about from '@/utils/about';

export default function SkillData(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(about);
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
