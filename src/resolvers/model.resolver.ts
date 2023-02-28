import { ExpressContext } from "apollo-server-express";
import ModelController from "../controller/Model";

export default {
  Query: {
    Models: async (_: any, {}, context: any, infos: any) => {
      return await new ModelController().listModel();
    },
    Model: async (_: any, { id }: { id: number }, context: any, infos: any) => {
      return await new ModelController().getModel(id);
    },
  },
  Mutation: {
    createModel: async (
      _: any,
      args: { name: string },
      { res }: ExpressContext
    ) => {
      const { name } = args;
      let car = await new ModelController().addModel({ name });
      return car;
    },

    updateModel: async (
      _: any,
      args: { id: number; name: string },
      { res }: ExpressContext
    ) => {
      const { id, name } = args;
      let Model = await new ModelController().updateModel({ id, name });
      return Model;
    },

    deleteModel: async (
      _: any,
      args: { id: number },
      { res }: ExpressContext
    ) => {
      const { id } = args;
      return await new ModelController().deleteModel(+id);
    },
  },
};
