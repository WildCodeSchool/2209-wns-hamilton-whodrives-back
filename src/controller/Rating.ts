import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Rating from "../entity/Rating"
import { MutationCreateRatingArgs, MutationUpdateRatingArgs } from "@/graphgen";


class RatingController {
  db: Repository<Rating>;
  constructor() {
    this.db = datasource.getRepository("Rating");
  }
  async listRating() {
    return await this.db.find();
  }
  async getRating(id: number) {
    return await this.db.findOneBy({ id });
  }
  async addRating({ note,content }:MutationCreateRatingArgs) {
    const Rating = await this.db.save({note,content})
    return Rating;
  }
  async updateRating({id, note,content  }:MutationUpdateRatingArgs) {
    const RatingId = await this.db.findOne({ where: { id: +id } });
    return await this.db.save({...RatingId,note,content});
  }
  async deleteRating(id: number) {
    return await this.db.delete(id);
  }
}
export default RatingController;