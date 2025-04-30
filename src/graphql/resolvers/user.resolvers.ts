import { User } from "../../models/user.model";

export const userResolvers = {
  Query: {
    getUsers: async () => await User.find(),
  },
  Mutation: {
    createUser: async (_: any, args: any) => {
      const user = new User(args);
      return await user.save();
    },
  },
};
