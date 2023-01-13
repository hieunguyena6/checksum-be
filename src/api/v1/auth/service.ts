import { UserModel } from '../../../models';

const createUser = async (user: any) => {
  const data = await UserModel.create(user);
  return data;
};

const getUserByUsername = (username: string) => {
  return UserModel.findOne({
    username
  });
};

export { createUser, getUserByUsername };
