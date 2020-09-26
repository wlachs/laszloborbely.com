import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import ConfigModel from '../mongo/config';

const ConfigType = new GraphQLObjectType({
    name: 'Config',
    description: 'Config data type',
    fields: () => ({
        pageTitle: {
            type: GraphQLNonNull(GraphQLString),
            description: 'Website title',
        },
    }),
});

export const configQuery = {
    config: {
        type: ConfigType,
        description: 'Site configuration',
        resolve: async () => ConfigModel.findOne(),
    },
};

export const configMutation = {
    modifyPageTitle: {
        type: ConfigType,
        description: 'Modify page title',
        args: {
            pageTitle: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: async (parent, args) => {
            const config = await ConfigModel.findOne();
            config.pageTitle = args.pageTitle;
            return config.save();
        },
    },
};
