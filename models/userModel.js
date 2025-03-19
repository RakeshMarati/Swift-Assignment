// models/userModel.js
const { ObjectId } = require("mongodb");

const userSchema = {
  id: Number,
  name: String,
  username: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String,
    },
  },
  phone: String,
  website: String,
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  },
  posts: [
    {
      id: Number,
      title: String,
      body: String,
      comments: [
        {
          id: Number,
          name: String,
          email: String,
          body: String,
        },
      ],
    },
  ],
};

module.exports = { userSchema };
