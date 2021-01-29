let skills = [
    {id: "1", skillName: "HTML", projects: "5"},
    {id: "2", skillName: "CSS", projects: "5"},
    {id: "3", skillName: "JavaScript", projects: "4"}
];

function getSkill(incoming_id) {
    for (let skill of skills) {
        if (skill.id == incoming_id) {
            return skill
        }
    }
};

function createSkill(skill) {
    skill.id = Math.floor(Math.random()*7+4).toString();
    skill.projects = "0";
    skills.push(skill);
}

function updateSkill(num, id) {
    for (let skill of skills) {
        if (skill.id == id) {
            skill.projects = num.projects;
        }
    }
}

function deleteSkill(id) {
    let idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

module.exports = {
    skills,
    getSkill,
    createSkill,
    updateSkill,
    deleteSkill
}