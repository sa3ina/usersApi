const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    username: String,
    surname: String,
    password: String,
    isPublic: Boolean,
    posts: Array,
    follower: Array,
    following: Array,
    blockList: Array,
    stories: Array,
    notifications: Array,
    bio: Object,
    id: String,
  },
  {
    collection: "Users",
    timestamp: true,
  }
);

const Insan = mongoose.model("Users", schema);
module.exports = Insan;
