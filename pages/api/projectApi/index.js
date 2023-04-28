import projects from '@/utils/projectList';

export default function projectApi(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(projects);
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
