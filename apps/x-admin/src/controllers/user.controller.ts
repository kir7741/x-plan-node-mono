import * as userService from "../services/user.service";

const getUserById = async (req, res) => {
  try {
    const users = await userService.getUserById();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "取得使用者失敗", error });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "建立使用者失敗", error });
  }
};

const updateUserById = async (req, res) => {
  try {
    const user = await userService.updateUserById(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "建立使用者失敗", error });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await userService.deleteUserById(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "建立使用者失敗", error });
  }
};

export { getUserById, createUser, updateUserById, deleteUserById };
