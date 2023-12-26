const User = require("../models/Models");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const user = req.body;

  try {
    let findUser = await User.findOne({ username: user.username });

    if (findUser) {
      const token = jwt.sign(
        { password: user.password, username: user.username },
        process.env.SECRET_TOKEN,
        {
          expiresIn: "2s",
        }
      );
      console.log("token", token);
      console.log("salammm");

      return res.status(200).send(token);
    } else {
      return res.status(201).send("please enter correct info");
    }
  } catch {
    (err) => {
      console.log(err);
      return err;
    };
  }
};
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
  const user = req.body;

  try {
    let findUserByName = await User.findOne({ username: user.username });
    let findUserByEmail = await User.findOne({ username: user.email });
    if (findUserByName) {
      return res.status(201).send("this username is already taken");
    }
    if (findUserByEmail) {
      return res.status(201).send("this email is already used");
    }
    {
      const newUser = new User(req.body);
      newUser.save();

      res.status(200).send({
        message: "succesfull registration",
      });
    }
  } catch {
    (err) => {
      console.log(err);
      return err;
    };
  }
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
  login,
};
