import {
  GraphQLBoolean, GraphQLNonNull, GraphQLString,
} from 'graphql';
import ConfigModel from '../mongo/config';

export const configMutation = {
  modifyPassword: {
    type: GraphQLBoolean,
    description: 'Modify admin password',
    args: {
      password: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parent, args) => {
      const config = await ConfigModel.findOne();
      config.adminPassword = args.password;
      try {
        await config.save();
        return true;
      } catch (err) {
        return false;
      }
    },
  },
};
