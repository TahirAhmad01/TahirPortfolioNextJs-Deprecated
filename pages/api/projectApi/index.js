import projects from '@/utils/projectList';
import fs from 'fs';

export default function projectApi(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(projects);
    res.status(405).json({ message: 'Method not allowed.' });
  } else if (req.method === 'POST') {
    const getProjects = req.body;
    //   const newUser = getUser;
    projects.push(getProjects);

    fs.writeFile(
      './utils/projectList.json',
      JSON.stringify(getProjects),
      err => {
        if (err) throw err;
        console.log('File modified');
      },
    );
    // });

    res.status(200).json(getProjects);
  }
}
