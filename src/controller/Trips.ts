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

  async getTrip(id: number) {
    return await this.db.findOneBy({ id });
  }

  async addTrip({
    departure_places,
    destination,
    date_departure,
    arrival_date,
    hour_departure,
  }: MutationCreateTripArgs) {
    const Trip = await this.db.save({
      departure_places,
      destination,
      date_departure,
      arrival_date,
      hour_departure,
    });
    return Trip;
  }

  async updateTrip({
    id,
    departure_places,
    destination,
    date_departure,
    arrival_date,
    hour_departure,
  }: MutationUpdateTripArgs) {
    const TripId = await this.db.findOne({ where: { id: +id } });
    return await this.db.save({
      ...TripId,
      departure_places,
      destination,
      date_departure,
      arrival_date,
      hour_departure,
    });
  }

  async deleteTrip(id: number) {
    return await this.db.delete(id);
  }

  async search({
    arrival_date,
    departure_places,
    date_departure,
    places,
  }: any) {
    //pour des filtres plus poussés il faudra faire un query builder
    return await this.db.find({
      where: {
        arrival_date,
        departure_places,
        date_departure,
      },
    });
  }
}

export default TripController;
