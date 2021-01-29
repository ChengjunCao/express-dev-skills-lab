let skillsModel = require('../models/skillsModel');

function index (req, res, next) {
  let skills = skillsModel.skills;
  res.render('skills', {skills})
};

function detail (req, res, next) {
  res.render('detail', {skill: skillsModel.getSkill(req.params.id)})
};

function newSkill (req, res, next) {
  res.render('new');
}

function edit (req, res, next) {
  res.render('edit', {skill: skillsModel.getSkill(req.params.id)});
}

function create (req, res, next) {
  skillsModel.createSkill(req.body);
  res.redirect('/skills');
}

function update (req, res, next) {
  skillsModel.updateSkill(req.body, req.params.id);
  res.redirect('/skills');
}

function deleteSkill (req, res, next) {
  skillsModel.deleteSkill(req.params.id);
  res.redirect('/skills');
}

module.exports = {
    index,
    detail,
    newSkill,
    edit,
    create,
    update,
    delete: deleteSkill
}