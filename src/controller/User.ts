import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import User from "../entity/User";
import {
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationUpdateUserArgs,
} from "@/graphgen";
import { IUserLogged } from "../resolvers/Interface";
import UserInfo from "../entity/UserInfo";
import { FindOneOptions } from "typeorm";
import Trip from "src/entity/Trip";

class UserController {
  db: Repository<User>;
  trip: Repository<Trip>;
  constructor() {
    this.db = datasource.getRepository("User");
    this.trip = datasource.getRepository("Trip");
  }

  async listUsers() {
    return await this.db.find();
  }

  async getUserLogged({ userLogged }: IUserLogged){
    let userIdLogged = userLogged.id;
    console.log(userIdLogged)
    return await this.db.findOne({where: {id: userIdLogged}})
  }

  async getUserTripsLoggedUser({userLogged}: IUserLogged) {
    try {
      const userIdLogged = userLogged.id;
      const user = await this.db.findOne({ where: { id: userIdLogged } });
  
      if (!user) {
        throw new Error("Utilisateur non trouvé");
      }
  
      const trips = await this.trip.createQueryBuilder("trip")
      .leftJoinAndSelect("trip.users", "users")
      .where("users.id = :userId", { userId: userIdLogged })
      .getMany();
      console.log("ici",trips)
      return trips;
    } catch (error) {
      console.error("Erreur lors de la récupération des voyages de l'utilisateur :", error);
      throw error;
    }
  }
  async getAllUserTrips() {
    try {
      const users = await this.db.createQueryBuilder("user")
        .leftJoinAndSelect("user.trips", "trip")
        .getMany();
  
      const trips = users.flatMap(user => user.trips);
  
      return trips;
    } catch (error) {
      console.error("Erreur lors de la récupération des voyages des utilisateurs :", error);
      throw error;
    }
  }
  async selectTrip({ userLogged, tripId }: IUserLogged & { tripId: number }) {
    try {
      const trip = await this.trip.findOne({ where: { id: tripId }, relations: ["users"] });
  
      if (!trip) {
        throw new Error("Voyage non trouvé");
      }
  
      const userIdLogged = userLogged.id;
      const selectedUser = await this.db.findOne({ where: { id: userIdLogged } });
  
      if (!selectedUser) {
        throw new Error("Utilisateur non autorisé à sélectionner ce voyage");
      }
  
      trip.users.push(selectedUser); // Ajouter l'utilisateur sélectionné à la liste des utilisateurs du voyage
  
      await this.trip.save(trip); // Enregistrer les modifications du voyage
  
      return trip;
    } catch (error) {
      console.error("Erreur lors de la sélection du voyage :", error);
      throw error;
    }
  }
  
  
  async getUser(id: number) {
    return await this.db.findOneBy({ id });
  }

  async getUserByEmail(email :string) {
    return await this.db.findOne( {where: {email} });
  }

  async addUser({
    username,
    password,
    email,
    phone,
    firstname,
    lastname,
    date_of_birth,
  }: MutationCreateUserArgs) {
    const user = await this.db.save({
      username,
      password,
      email,
      phone,
      firstname,
      lastname,
      date_of_birth,
    });
    return user;
  }

  async assignUserInfos({ userLogged }: IUserLogged, userInfo: UserInfo) {
    return await this.db.save({
      ...userLogged,
      userInfo,
    });
  }

  async updateUser({
    id,
    username,
    password,
    email,
    phone,
    firstname,
    lastname,
    date_of_birth,
  }: MutationUpdateUserArgs) {
    const user = await this.db.findOne({ where: { id: +id } });
    return await this.db.save({
      ...user,
      username,
      password,
      email,
      phone,
      firstname,
      lastname,
      date_of_birth,
    });
  }

  async deleteUser({ id }: MutationDeleteUserArgs) {
    let msg = "User not found";
    let msg2 = "Error request";
    const user = await this.db.findOne({ where: { id: +id } });
    if (user) {
      let result = await this.db.delete(id);
      if (result?.affected != 0) {
        return { msg: "User deleted" };
      } else {
        return msg2;
      }
    } else {
      return { msg };
    }
  }
}

export default UserController;
