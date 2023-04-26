import skillList from "@/utils/skillData"

export default function SkillData (req, res) {
    if(req.method === "POST"){
        res.status(200).json(skillList);
    }
}