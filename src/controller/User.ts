import {
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationUpdateUserArgs,
} from "@/graphgen";
import Trip from "src/entity/Trip";
import { Repository } from "typeorm";

import ProfilPicture from "../entity/ProfilePicture";
import User from "../entity/User";
import UserInfo from "../entity/UserInfo";
import datasource from "../lib/datasource";
import { IUserLogged } from "../resolvers/Interface";

class UserController {
  db: Repository<User>;
  trip: Repository<Trip>;
  userInfo: Repository<UserInfo>;
  profilePicture: Repository<ProfilPicture>;
  constructor() {
    this.db = datasource.getRepository("User");
    this.trip = datasource.getRepository("Trip");
    this.userInfo = datasource.getRepository("UserInfo");
    this.profilePicture = datasource.getRepository("profil_picture");
  }

  async listUsers() {
    return await this.db.find({
      select: {
        cars: { id: true },
      },
    });
  }

  async getUserLogged({ userLogged }: IUserLogged) {
    let userIdLogged = userLogged.id;
    const user = await this.db.findOne({ where: { id: userIdLogged } });
    return user;
  }
  async checkUserLogged({ userLogged }: IUserLogged) {
    let msg = false;
    if (!userLogged) return { msg };
    let userIdLogged = userLogged.id;
    const result = await this.db.findOne({ where: { id: userIdLogged } });
    if (result) {
      return { msg: true, user: result };
    } else {
      return { msg };
    }
  }
  async getProfilePicturePath({ userLogged }: IUserLogged) {
    try {
      let userIdLogged = userLogged.id;
      const user = await this.db.findOne({ where: { id: userIdLogged } });
      if (user && user.userInfo) {
        const userInfoId = user.userInfo.id;
        const profilePicture = await this.profilePicture
          .createQueryBuilder("profil_picture")
          .leftJoinAndSelect("profil_picture.userInfo", "userInfo")
          .where("userInfo.id = :userInfoId", { userInfoId })
          .getOne();
        const result = profilePicture?.path;
        return result;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error while fetching profile picture path:", error);
      return null;
    }
  }

  async getUserTripsLoggedUser({ userLogged }: IUserLogged) {
    console.log("userLogged", userLogged);
    try {
      if (!userLogged) {
        throw new Error("Utilisateur non trouvé");
      }
      const trips = await this.trip
        .createQueryBuilder("trip")
        .leftJoinAndSelect("trip.users", "users")
        .leftJoinAndSelect("trip.passengers", "passengers")
        .where("users.id = :userId OR passengers.id = :userId", {
          userId: userLogged.id,
        })
        .getMany();
      return trips;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des voyages de l'utilisateur :",
        error
      );
      throw error;
    }
  }

  async getAllUserTrips() {
    try {
      const users = await this.db
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.trips", "trip")
        .getMany();

      const trips = users.flatMap((user) => user.trips);

      return trips;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des voyages des utilisateurs :",
        error
      );
      throw error;
    }
  }
  async selectTrip({ userLogged, tripId }: IUserLogged & { tripId: number }) {
    try {
      const tripRepository = this.trip;
      const userRepository = this.db;

      const trip = await tripRepository.findOne({
        where: { id: tripId },
        relations: ["passengers"],
      });

      if (!trip) {
        throw new Error("Voyage non trouvé");
      }

      const selectedUser = await userRepository.findOne({
        where: { id: userLogged.id },
      });

      if (!selectedUser) {
        throw new Error("Utilisateur non autorisé à sélectionner ce voyage");
      }

      trip.passengers = [...trip.passengers, selectedUser];

      await tripRepository.save(trip);

      return trip;
    } catch (error) {
      console.error("Erreur lors de la sélection du voyage :", error);
      throw error;
    }
  }

  async getUser(id: number) {
    return await this.db.findOneBy({ id });
  }

  async getUserByEmail(email: string) {
    return await this.db.findOne({ where: { email } });
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
      id: userLogged.id,
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
