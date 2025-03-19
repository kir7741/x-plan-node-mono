import UseModel from "../models/user.model";

const getUserById = async () => {
  return await new UseModel(); // 從資料庫取得所有使用者
};

const createUser = async userData => {
  const newUser = new UseModel();
  return await new UseModel();
};

const updateUserById = async userData => {
  const newUser = new UseModel();
  return await new UseModel();
};

const deleteUserById = async userData => {
  const newUser = new UseModel();
  return await new UseModel();
};

export { getUserById, createUser, updateUserById, deleteUserById };
