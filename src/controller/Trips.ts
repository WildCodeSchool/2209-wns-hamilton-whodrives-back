import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Trip from "../entity/Trip";
import { MutationCreateTripArgs, MutationUpdateTripArgs } from "@/graphgen";
import { IUserLogged } from "../resolvers/Interface";
import User from "../entity/User";

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
  async addTrip(
    {
      departure_places,
      destination,
      date_departure,
      arrival_date,
      price,
      description,
    }: MutationCreateTripArgs,
    userLogged: User
  ) {
    const trip = new Trip();
    trip.departure_places = departure_places;
    trip.destination = destination;
    trip.date_departure = new Date(date_departure);
    trip.arrival_date = new Date(arrival_date);
    trip.price = price;
    trip.description = description;
    const users = userLogged;
    const user = await datasource.getRepository(User).findOne({ where: { id: users.id } });
    trip.users = [user];
    const savedTrip = await this.db.save(trip);
    return savedTrip;
  }

  async updateTrip({
    id,
    departure_places,
    destination,
    date_departure,
    arrival_date,
    price,
    description,
  }: MutationUpdateTripArgs) {
    const TripId = await this.db.findOne({ where: { id: +id } });
    return await this.db.save({
      ...TripId,
      departure_places,
      destination,
      date_departure,
      arrival_date,
      price,
      description,
    });
  }
  async deleteTrip(id: number) {
    return await this.db.delete(id);
  }
}

export default TripController;
