import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Trip from "../entity/Trip";
import { MutationCreateTripArgs, MutationUpdateTripArgs } from "@/graphgen";
import { IUserLogged } from "../resolvers/Interface";
import User from "../entity/User";

class TripController {
  db: Repository<Trip>;
  user: Repository<User>;
  constructor() {
    this.db = datasource.getRepository("Trip");
    this.user = datasource.getRepository("User");
  }
  async getTripSearch({departure_places,destination,date_departure,arrival_date,price,description,hour_departure,place_available}: {departure_places:string,destination:string,date_departure:Date,arrival_date:Date,price:number,description:string,hour_departure:string,place_available:number}) {
    return await this.db.findBy({departure_places,destination,date_departure,arrival_date,price,description,hour_departure,place_available});
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
      hour_departure,
      place_available

    }: MutationCreateTripArgs,
    userLogged: User
  ) {

  
    const user = await datasource.getRepository(User).findOne({ where: { id: userLogged.id } });
    if (!user) {
      throw new Error("Utilisateur introuvable");
    }
  
    const trip = new Trip();
    trip.departure_places = departure_places;
    trip.destination = destination;
    trip.date_departure = new Date(date_departure);
    trip.arrival_date = new Date(arrival_date);
    trip.price = price;
    trip.description = description;
    trip.hour_departure = hour_departure;
    trip.place_available = place_available;
  
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
    hour_departure,
    place_available
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
      hour_departure,
      place_available
    });
  }

  async deleteTrip(id: number) {
    return await this.db.delete(id);
  }

}

export default TripController;
