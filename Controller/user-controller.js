import User from "../schema/user-schema.js";

export const addUser = async (req, res) => {
  const { username, password } = req.body;

  const newUser = new User({ username, password });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add User" });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        return res.status(400).send("User not found");
      }

      if (user.password === password) {
        res.send(`Welcome back, ${username}!`);
      } else {
        res.status(400).send("Invalid password");
      }
    })
    .catch((error) => {
      res.status(500).send("Error logging in");
    });
};
