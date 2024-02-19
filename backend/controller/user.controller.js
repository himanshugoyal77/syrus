import User from "../models/user.model.js";

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: "Error while creating user", error });
  }
};

export { createUser };
