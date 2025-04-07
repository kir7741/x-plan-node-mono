import UseModel from "../models/user.model";
import pool from "../db";

const getUserById = async (userId: string) => {
  console.log(userId);
  return (await pool.query("SELECT * FROM users WHERE id = $1", [userId])).rows;
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
