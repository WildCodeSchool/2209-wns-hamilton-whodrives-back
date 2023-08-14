import { ExpressContext } from "apollo-server-express";

import BrandController from "../controller/Brand";

export default {
  Query: {
    getBrands: async (_: any, {}, context: any, infos: any) => {
      return await new BrandController().listBrand();
    },

    getBrandById: async (_: any, { id }: { id: number }, context: any, infos: any) => {
      return await new BrandController().getBrand(id);
    },
  },

  Mutation: {
    createBrand: async (
      _: any,
      args: { name: string },
      { res }: ExpressContext
    ) => {
      const { name } = args;
      let Brand = await new BrandController().addBrand({ name });
      return Brand;
    },

    updateBrand: async (
      _: any,
      args: { id: number; name: string },
      { res }: ExpressContext
    ) => {
      const { id, name } = args;
      let Brand = await new BrandController().updateBrand({ id, name });
      return Brand;
    },

    deleteBrand: async (
      _: any,
      args: { id: number },
      { res }: ExpressContext
    ) => {
      const { id } = args;
      return await new BrandController().deleteBrand(+id);
    },
  },
};
