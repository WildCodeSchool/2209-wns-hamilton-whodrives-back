import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Trip from "../entity/Trip";
import { MutationCreateTripArgs, MutationUpdateTripArgs } from "@/graphgen";


class TripController {
    db: Repository<Trip>;
    constructor() {
      this.db = datasource.getRepository("Trip");
    }
    async listTrip() {
        return await this.db.find();
    }
    async getTrip(id: number){
        return await this.db.findOneBy({ id });
    }
    async addTrip({ departure_places,destination,date_departure,arrival_date,hour_departure }:MutationCreateTripArgs) {
        const Trip = await this.db.save({departure_places,destination,date_departure,arrival_date,hour_departure })
        return Trip;
    }
    async updateTrip({id, departure_places,destination,date_departure,arrival_date,hour_departure  }:MutationUpdateTripArgs) {
        const TripId = await this.db.findOne({ where: { id: +id } });
        return await this.db.save({...TripId,departure_places,destination,date_departure,arrival_date,hour_departure});
      }
      async deleteTrip(id: number) {
        return await this.db.delete(id);
      }
    
}
export default TripController;