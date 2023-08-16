import {
  MutationCreateTripArgs,
  MutationUpdateTripArgs,
  MutationUpdateTripPlaceArgs,
} from "@/graphgen";
import { Between, Repository } from "typeorm";

import Trip from "../entity/Trip";
import User from "../entity/User";
import datasource from "../lib/datasource";

interface IFilter {
  departure_place: string;
  destination: string;
  departure_date: Date;
  arrival_date: Date;
  price: number;
  description: string;
  available_seat: number;
  departure_hour?: string;
}
class TripController {
  db: Repository<Trip>;
  user: Repository<User>;
  constructor() {
    this.db = datasource.getRepository("Trip");
    this.user = datasource.getRepository("User");
  }
  async getTripSearch({
    departure_place,
    destination,
    departure_date,
    arrival_date,
    price,
    description,
    departure_hour,
    available_seat,
  }: {
    departure_place: string;
    destination: string;
    departure_date: Date;
    arrival_date: Date;
    price: number;
    description: string;
    departure_hour: string;
    available_seat: number;
  }) {
    return await this.db.findBy({
      departure_place,
      destination,
      departure_date,
      arrival_date,
      price,
      description,
      departure_hour,
      available_seat,
    });
  }
  async getTripSearchByHourRange({
    departure_place,
    destination,
    departure_date,
    arrival_date,
    price,
    description,
    departure_hour,
    available_seat,
    minHour,
    maxHour,
  }: {
    departure_place: string;
    destination: string;
    departure_date: Date;
    arrival_date: Date;
    price: number;
    description: string;
    departure_hour: string;
    available_seat: number;
    minHour: string;
    maxHour: string;
  }) {
    let filter: IFilter = {
      departure_place,
      destination,
      departure_date,
      arrival_date,
      price,
      description,
      available_seat,
    };

    return await this.db.findBy({
      ...filter,
      departure_hour:
        maxHour !== "" && minHour !== "" ? Between(minHour, maxHour) : null,
    });
  }

  async listTrip() {
    return await this.db.find();
  }

  async getTripById(id: number) {
    return await this.db.findOneBy({ id });
  }
  async addTrip(
    {
      departure_place,
      destination,
      departure_date,
      arrival_date,
      price,
      description,
      departure_hour,
      available_seat,
    }: MutationCreateTripArgs,
    userLogged: User
  ) {
    const user = await datasource
      .getRepository(User)
      .findOne({ where: { id: userLogged.id } });
    if (!user) {
      throw new Error("Utilisateur introuvable");
    }

    const trip = new Trip();
    trip.departure_place = departure_place;
    trip.destination = destination;
    trip.departure_date = new Date(departure_date);
    trip.arrival_date = new Date(arrival_date);
    trip.price = price;
    trip.description = description;
    trip.departure_hour = departure_hour;
    trip.available_seat = available_seat;

    trip.users = [user];

    return await this.db.save(trip);
  }

  async updateTripPlace({ id, available_seat }: MutationUpdateTripPlaceArgs) {
    const trip = await this.db.findOne({ where: { id: +id } });
    if (!trip) {
      throw new Error("ERROR");
    }
    const {
      departure_place,
      destination,
      departure_date,
      arrival_date,
      price,
      description,
    } = trip;
    trip.available_seat = available_seat;
    await this.db.save(trip);
    return {
      ...trip,
      departure_place,
      destination,
      departure_date,
      arrival_date,
      price,
      description,
    };
  }

  async updateTrip({
    id,
    departure_place,
    destination,
    departure_date,
    arrival_date,
    price,
    description,
    departure_hour,
    available_seat,
  }: MutationUpdateTripArgs) {
    const TripId = await this.db.findOne({ where: { id: +id } });
    return await this.db.save({
      ...TripId,
      departure_place,
      destination,
      departure_date,
      arrival_date,
      price,
      description,
      departure_hour,
      available_seat,
    });
  }

  async deleteTrip(id: number, userLogged: User) {
    let msg = "Trip not found";
    let msg2 = "Error request";
    const trip = await this.db.findOne({ where: { id: +id } });

    if (trip) {
      const isUserDriver = trip.users.some(
        (user) => user.username === userLogged.username
      );
      if (isUserDriver) {
        let result = await this.db.delete(id);
        if (result?.affected != 0) {
          return { message: "Trip deleted", success: true };
        } else {
          return { message: msg, success: false };
        }
      } else {
        const updatedPassengers = trip.passengers.filter(
          (passenger) => passenger.username !== userLogged.username
        );
        trip.passengers = updatedPassengers;
        trip.available_seat += 1;
        await this.db.save(trip);
        return { message: "Passenger removed from the trip", success: true };
      }
    } else {
      return { message: msg, success: false };
    }
  }
}

export default TripController;
