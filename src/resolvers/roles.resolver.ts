import { ExpressContext } from "apollo-server-express";
import RolesController from "../controller/Roles";

export default {
  Query: {
    Roles: async (_: any, {}, context: any, infos: any) => {
      return await new RolesController().listRoles();
    },

    Role: async (_: any, { id }: { id: number }, context: any, infos: any) => {
      return await new RolesController().getRole(id);
    },
  },
  Mutation: {
    createRole: async (
      _: any,
      args: { name: string },
      { res }: ExpressContext
    ) => {
      const { name } = args;
      let Role = await new RolesController().addRole({ name });
      return Role;
    },

    updateRole: async (
      _: any,
      args: { id: number; name: string },
      { res }: ExpressContext
    ) => {
      const { id, name } = args;
      let Role = await new RolesController().updateRole({ id, name });
      return Role;
    },

    deleteRole: async (
      _: any,
      args: { id: number },
      { res }: ExpressContext
    ) => {
      const { id } = args;
      return await new RolesController().deleteRole(+id);
    },
  },
};
