import { UserModel } from '../../../models';

const createUser = async (user: any) => {
  const data = await UserModel.create(user);
  return data;
};

const getUserByUsername = (userName: string) => {
  return UserModel.findOne({
    userName
  });
};

export { createUser, getUserByUsername };
