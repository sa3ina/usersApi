const User = require("../models/Models");
const getAll = async (req, res) => {
  const posts = await User.find();
  res.send(posts);
};
const getById = async (req, res) => {
  const posts = await User.findOne({ id: req.params.id });
  res.send(posts);
};
const deleteUser = async (req, res) => {
  await User.deleteOne({ id: req.params.id });
  res.status(204).send();
};
const postUser = async (req, res) => {
  const post = new User(req.body);
  await post.save();
  res.send(post);
};
const patchUser = async (req, res) => {
  let id = req.params.id;
  let updateUser = await User.findOneAndUpdate({ id: id }, req.body);
};
const putUser = async (req, res) => {
  const posts = await User.replaceOne({ id: req.params.id }, req.body);
  res.send(posts);
};
module.exports = {
  getAll,
  getById,
  deleteUser,
  postUser,
  patchUser,
  putUser,
};
