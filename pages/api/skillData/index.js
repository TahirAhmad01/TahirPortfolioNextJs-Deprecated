import skillList from "./skillData"

export default function SkillData (req, res) {
    if(req.method === "POST"){
        res.status(200).json(skillList);
    }
}