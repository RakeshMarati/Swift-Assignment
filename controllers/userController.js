// controllers/userController.js
const axios = require("axios");

async function loadUsers(db) {
  try {
    const usersCollection = db.collection("users");

    // Fetch users, posts, and comments from JSONPlaceholder API
    const usersRes = await axios.get("https://jsonplaceholder.typicode.com/users");
    const postsRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const commentsRes = await axios.get("https://jsonplaceholder.typicode.com/comments");

    const users = usersRes.data;
    const posts = postsRes.data;
    const comments = commentsRes.data;

    // Insert users, posts, and comments into users collection
    for (const user of users) {
      const userPosts = posts.filter(post => post.userId === user.id);
      user.posts = userPosts.map(post => {
        post.comments = comments.filter(comment => comment.postId === post.id);
        return post;
      });
      await usersCollection.insertOne(user);
    }

    return { status: "success" };
  } catch (err) {
    console.error("Error loading users:", err);
    throw err;
  }
}

async function deleteAllUsers(db) {
  try {
    const usersCollection = db.collection("users");
    await usersCollection.deleteMany({});
    return { status: "success" };
  } catch (err) {
    console.error("Error deleting users:", err);
    throw err;
  }
}

async function deleteUserById(db, userId) {
  try {
    const usersCollection = db.collection("users");
    const result = await usersCollection.deleteOne({ id: parseInt(userId) });
    if (result.deletedCount === 0) throw new Error("User not found");
    return { status: "success" };
  } catch (err) {
    console.error("Error deleting user:", err);
    throw err;
  }
}

async function getUserById(db, userId) {
  try {
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ id: parseInt(userId) });
    if (!user) throw new Error("User not found");
    return user;
  } catch (err) {
    console.error("Error fetching user:", err);
    throw err;
  }
}

async function addUser(db, userData) {
  try {
    const usersCollection = db.collection("users");
    const existingUser = await usersCollection.findOne({ id: userData.id });
    if (existingUser) throw new Error("User already exists");

    await usersCollection.insertOne(userData);
    return { status: "success" };
  } catch (err) {
    console.error("Error adding user:", err);
    throw err;
  }
}

module.exports = {
  loadUsers,
  deleteAllUsers,
  deleteUserById,
  getUserById,
  addUser,
};
