import skillList from '@/utils/skillData';
import fs from 'fs';

export default function SkillData(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(skillList);
  } else if (req.method === 'POST') {
    const getSkillsList = req.body;
    //   const newUser = getUser;
    skillList.push(getSkillsList);

    fs.writeFile(
      './utils/skillData.json',
      JSON.stringify(getSkillsList),
      err => {
        if (err) throw err;
        console.log('File modified');
      },
    );
    // });

    res.status(200).json(getSkillsList);
  }
}
