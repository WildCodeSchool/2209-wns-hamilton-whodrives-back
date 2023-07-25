import {
  MutationCreateReceiptsArgs,
  MutationDeleteReceiptsArgs,
  MutationUpdateReceiptsArgs,
} from "@/graphgen";
import { ExpressContext } from "apollo-server-express";

import ReceiptsController from "../controller/Receipts";

export default {
  Query: {
    Receipts: async (_: any, {}, context: any, infos: any) => {
      return await new ReceiptsController().listReceipts();
    },

    Receipt: async (
      _: any,
      { id }: { id: number },
      context: any,
      infos: any
    ) => {
      return await new ReceiptsController().getReceipts(id);
    },
  },

  Mutation: {
    createReceipts: async (
      _: any,
      args: MutationCreateReceiptsArgs,
      { res }: ExpressContext
    ) => {
      const { file_name } = args;
      let Rating = await new ReceiptsController().addReceipts({ file_name });
      return Rating;
    },

    updateReceipts: async (
      _: any,
      args: MutationUpdateReceiptsArgs,
      { res }: ExpressContext
    ) => {
      const { id, file_name } = args;
      let Receipts = await new ReceiptsController().UpdateReceipts({
        id,
        file_name,
      });
      return Receipts;
    },

    deleteReceipts: async (
      _: any,
      args: MutationDeleteReceiptsArgs,
      { res }: ExpressContext
    ) => {
      const { id } = args;
      let Receipts = await new ReceiptsController().deleteReceipts(+id);
      return Receipts;
    },
  },
};
