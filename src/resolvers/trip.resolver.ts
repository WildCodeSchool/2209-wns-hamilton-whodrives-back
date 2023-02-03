import { MutationCreateTripArgs, MutationDeleteTripArgs, MutationUpdateTripArgs } from '@/graphgen';
import {ExpressContext} from 'apollo-server-express';
import TripController from '../controller/Trips';

export default{
    Query: {
        getTrips: async (_: any,{}, context: any, infos: any) => {
            return await new TripController().listTrip();
        },
        getTrip:
        async (_: any, { id }: { id: number }, context: any, infos: any) => {
            return await new TripController().getTrip(id);
        }
    } ,
Mutation: {
            createTrip: async (_: any, args: MutationCreateTripArgs, { res }: ExpressContext) => {
                const {  departure_places ,destination,date_departure,arrival_date,hour_departure} = args;
                let Trip = await new TripController().addTrip({  departure_places ,destination,date_departure,arrival_date,hour_departure});
                return Trip
            },
    
            updateTrip: async (_: any, args: MutationUpdateTripArgs, { res }: ExpressContext) => {   
                const { id, departure_places ,destination,date_departure,arrival_date,hour_departure} = args;
                let Trip = await new TripController().updateTrip({ id, departure_places ,destination,date_departure,arrival_date,hour_departure});
                return Trip
            },
    
            deleteTrip: async (_: any, args: MutationDeleteTripArgs, { res }: ExpressContext) => {
                const { id } = args;
                return await new TripController().deleteTrip(+id);   
                
            }
        }
}

