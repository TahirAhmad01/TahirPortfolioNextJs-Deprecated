import skillList from "./skillData"

export default function SkillData (req, res) {
    if(req.method === "GET"){
        res.status(200).json(skillList);
    }
}