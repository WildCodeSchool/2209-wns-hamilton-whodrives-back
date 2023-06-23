import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = undefined | T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AccountNumber: any;
  BigInt: any;
  Byte: any;
  CountryCode: any;
  Cuid: any;
  Currency: any;
  DID: any;
  Date: any;
  DateTime: any;
  DateTimeISO: any;
  DeweyDecimal: any;
  Duration: any;
  EmailAddress: any;
  GUID: any;
  HSL: any;
  HSLA: any;
  HexColorCode: any;
  Hexadecimal: any;
  IBAN: any;
  IP: any;
  IPCPatent: any;
  IPv4: any;
  IPv6: any;
  ISBN: any;
  ISO8601Duration: any;
  JSON: any;
  JSONObject: any;
  JWT: any;
  LCCSubclass: any;
  Latitude: any;
  LocalDate: any;
  LocalDateTime: any;
  LocalEndTime: any;
  LocalTime: any;
  Locale: any;
  Long: any;
  Longitude: any;
  MAC: any;
  NegativeFloat: any;
  NegativeInt: any;
  NonEmptyString: any;
  NonNegativeFloat: any;
  NonNegativeInt: any;
  NonPositiveFloat: any;
  NonPositiveInt: any;
  ObjectID: any;
  PhoneNumber: any;
  Port: any;
  PositiveFloat: any;
  PositiveInt: any;
  PostalCode: any;
  RGB: any;
  RGBA: any;
  RoutingNumber: any;
  SafeInt: any;
  SemVer: any;
  Time: any;
  TimeZone: any;
  Timestamp: any;
  URL: any;
  USCurrency: any;
  UUID: any;
  UnsignedFloat: any;
  UnsignedInt: any;
  Upload: any;
  UtcOffset: any;
  Void: any;
};

export type About = {
  __typename?: 'About';
  animal?: Maybe<Scalars['Boolean']>;
  chatOption?: Maybe<ChatOption>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  musicOption?: Maybe<MusicOption>;
  smoke?: Maybe<Scalars['Boolean']>;
};

export type Badge = {
  __typename?: 'Badge';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Car = {
  __typename?: 'Car';
  carPictures?: Maybe<Array<Maybe<CarPicture>>>;
  id: Scalars['ID'];
  model?: Maybe<Model>;
  seat: Scalars['Int'];
  user?: Maybe<User>;
};

export type CarPicture = {
  __typename?: 'CarPicture';
  id: Scalars['ID'];
  path: Scalars['String'];
};

export type ChatOption = {
  __typename?: 'ChatOption';
  content: Scalars['String'];
  id: Scalars['ID'];
};

export type Model = {
  __typename?: 'Model';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type MusicOption = {
  __typename?: 'MusicOption';
  content: Scalars['String'];
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPicture: CarPicture;
  addProfilePicture: ProfilePicture;
  createAbout?: Maybe<About>;
  createBadge?: Maybe<Badge>;
  createCar?: Maybe<Car>;
  createChatOption?: Maybe<ChatOption>;
  createModel?: Maybe<Model>;
  createMusicOption?: Maybe<MusicOption>;
  createRating?: Maybe<Rating>;
  createReceipts?: Maybe<Receipts>;
  createRole?: Maybe<Roles>;
  createTrip?: Maybe<Trip>;
  createUser?: Maybe<UserCreated>;
  createUserInfo?: Maybe<UserInfo>;
  deleteBadge?: Maybe<Badge>;
  deleteCar?: Maybe<Car>;
  deleteModel?: Maybe<Model>;
  deleteRating?: Maybe<Rating>;
  deleteReceipts?: Maybe<Receipts>;
  deleteRole?: Maybe<Roles>;
  deleteTrip?: Maybe<Trip>;
  deleteUser?: Maybe<Res>;
  loginUser?: Maybe<RegisterUser>;
  selectTrip?: Maybe<Trip>;
  updateAbout?: Maybe<About>;
  updateBadge?: Maybe<Badge>;
  updateCar?: Maybe<Car>;
  updateChatOption?: Maybe<ChatOption>;
  updateModel?: Maybe<Model>;
  updateMusicAndChatOption?: Maybe<About>;
  updateMusicOption?: Maybe<MusicOption>;
  updateRating?: Maybe<Rating>;
  updateReceipts?: Maybe<Receipts>;
  updateRole?: Maybe<Roles>;
  updateTrip?: Maybe<Trip>;
  updateUser?: Maybe<User>;
  updateUserInfo?: Maybe<UserInfo>;
};


export type MutationAddPictureArgs = {
  carId: Scalars['ID'];
  file: Scalars['Upload'];
};


export type MutationAddProfilePictureArgs = {
  file: Scalars['Upload'];
  pictureID: Scalars['ID'];
};


export type MutationCreateAboutArgs = {
  animal: Scalars['Boolean'];
  chatOptionId: Scalars['ID'];
  description: Scalars['String'];
  musicOptionId: Scalars['ID'];
  smoke: Scalars['Boolean'];
};


export type MutationCreateBadgeArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateCarArgs = {
  modelId?: InputMaybe<Scalars['Int']>;
  optionId?: InputMaybe<Scalars['Int']>;
  seat: Scalars['Int'];
  userId?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateChatOptionArgs = {
  content: Scalars['String'];
};


export type MutationCreateModelArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type MutationCreateMusicOptionArgs = {
  content: Scalars['String'];
};


export type MutationCreateRatingArgs = {
  content?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateReceiptsArgs = {
  file_name?: InputMaybe<Scalars['String']>;
};


export type MutationCreateRoleArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type MutationCreateTripArgs = {
  arrival_date?: InputMaybe<Scalars['Date']>;
  date_departure?: InputMaybe<Scalars['Date']>;
  departure_places?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
  hour_departure?: InputMaybe<Scalars['String']>;
  place_available?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateUserArgs = {
  date_of_birth: Scalars['Date'];
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateUserInfoArgs = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  profilPictureId?: InputMaybe<Scalars['Int']>;
};


export type MutationDeleteBadgeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCarArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteModelArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRatingArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReceiptsArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTripArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSelectTripArgs = {
  tripId: Scalars['ID'];
};


export type MutationUpdateAboutArgs = {
  animal?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  smoke?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateBadgeArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCarArgs = {
  id: Scalars['ID'];
  modelId?: InputMaybe<Scalars['Int']>;
  optionId?: InputMaybe<Scalars['Int']>;
  seat?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateChatOptionArgs = {
  content: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationUpdateModelArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateMusicAndChatOptionArgs = {
  chatOptionId: Scalars['ID'];
  id: Scalars['ID'];
  musicOptionId: Scalars['ID'];
};


export type MutationUpdateMusicOptionArgs = {
  content: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationUpdateRatingArgs = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  note?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateReceiptsArgs = {
  file_name?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTripArgs = {
  arrival_date?: InputMaybe<Scalars['Date']>;
  date_departure?: InputMaybe<Scalars['Date']>;
  departure_places?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
  hour_departure?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  place_available?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateUserArgs = {
  date_of_birth: Scalars['Date'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  userInfoId?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};


export type MutationUpdateUserInfoArgs = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ProfilePicture = {
  __typename?: 'ProfilePicture';
  id: Scalars['ID'];
  path: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Badge?: Maybe<Badge>;
  Badges?: Maybe<Array<Maybe<Badge>>>;
  Model?: Maybe<Model>;
  Models?: Maybe<Array<Maybe<Model>>>;
  Rating?: Maybe<Rating>;
  Ratings?: Maybe<Array<Maybe<Rating>>>;
  Receipt?: Maybe<Receipts>;
  Receipts?: Maybe<Array<Maybe<Receipts>>>;
  Role?: Maybe<Roles>;
  Roles?: Maybe<Array<Maybe<Roles>>>;
  UserTrips?: Maybe<Array<Maybe<Trip>>>;
  UserTripsLoggedUser?: Maybe<Array<Maybe<Trip>>>;
  about?: Maybe<About>;
  abouts?: Maybe<Array<Maybe<About>>>;
  car?: Maybe<Car>;
  cars?: Maybe<Array<Maybe<Car>>>;
  chatOption?: Maybe<ChatOption>;
  chatOptions?: Maybe<Array<Maybe<ChatOption>>>;
  checkUserLogged?: Maybe<Res>;
  getTrip?: Maybe<Trip>;
  getTripSearch?: Maybe<Array<Maybe<Trip>>>;
  getTrips?: Maybe<Array<Maybe<Trip>>>;
  getUserInfo?: Maybe<UserInfo>;
  getUserInfos?: Maybe<Array<Maybe<UserInfo>>>;
  musicOption?: Maybe<MusicOption>;
  musicOptions?: Maybe<Array<Maybe<MusicOption>>>;
  user?: Maybe<User>;
  userLogged: User;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryBadgeArgs = {
  id: Scalars['ID'];
};


export type QueryModelArgs = {
  id: Scalars['ID'];
};


export type QueryRatingArgs = {
  id: Scalars['ID'];
};


export type QueryReceiptArgs = {
  id: Scalars['ID'];
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryAboutArgs = {
  id: Scalars['ID'];
};


export type QueryCarArgs = {
  id: Scalars['ID'];
};


export type QueryChatOptionArgs = {
  id: Scalars['ID'];
};


export type QueryGetTripArgs = {
  id: Scalars['ID'];
};


export type QueryGetTripSearchArgs = {
  arrival_date?: InputMaybe<Scalars['Date']>;
  date_departure?: InputMaybe<Scalars['Date']>;
  departure_places?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
  hour_departure?: InputMaybe<Scalars['String']>;
  place_available?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
};


export type QueryGetUserInfoArgs = {
  id: Scalars['ID'];
};


export type QueryMusicOptionArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Rating = {
  __typename?: 'Rating';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  note?: Maybe<Scalars['Int']>;
};

export type Receipts = {
  __typename?: 'Receipts';
  file_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type RegisterUser = {
  __typename?: 'RegisterUser';
  email?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Res = {
  __typename?: 'Res';
  msg?: Maybe<Scalars['String']>;
};

export type Roles = {
  __typename?: 'Roles';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Trip = {
  __typename?: 'Trip';
  arrival_date?: Maybe<Scalars['Date']>;
  date_departure?: Maybe<Scalars['Date']>;
  departure_places?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  hour_departure?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  passengers: Array<User>;
  place_available?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type User = {
  __typename?: 'User';
  cars?: Maybe<Array<Maybe<Car>>>;
  date_of_birth?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  trips?: Maybe<Array<Maybe<Trip>>>;
  userInfo?: Maybe<UserInfo>;
  username: Scalars['String'];
};

export type UserCreated = {
  __typename?: 'UserCreated';
  cars?: Maybe<Array<Maybe<Car>>>;
  date_of_birth?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  trips?: Maybe<Array<Maybe<Trip>>>;
  userInfo?: Maybe<UserInfo>;
  username: Scalars['String'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  about?: Maybe<About>;
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  profilPictureId?: Maybe<Scalars['ID']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  About: ResolverTypeWrapper<About>;
  AccountNumber: ResolverTypeWrapper<Scalars['AccountNumber']>;
  Badge: ResolverTypeWrapper<Badge>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Byte: ResolverTypeWrapper<Scalars['Byte']>;
  Car: ResolverTypeWrapper<Car>;
  CarPicture: ResolverTypeWrapper<CarPicture>;
  ChatOption: ResolverTypeWrapper<ChatOption>;
  CountryCode: ResolverTypeWrapper<Scalars['CountryCode']>;
  Cuid: ResolverTypeWrapper<Scalars['Cuid']>;
  Currency: ResolverTypeWrapper<Scalars['Currency']>;
  DID: ResolverTypeWrapper<Scalars['DID']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeISO: ResolverTypeWrapper<Scalars['DateTimeISO']>;
  DeweyDecimal: ResolverTypeWrapper<Scalars['DeweyDecimal']>;
  Duration: ResolverTypeWrapper<Scalars['Duration']>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  GUID: ResolverTypeWrapper<Scalars['GUID']>;
  HSL: ResolverTypeWrapper<Scalars['HSL']>;
  HSLA: ResolverTypeWrapper<Scalars['HSLA']>;
  HexColorCode: ResolverTypeWrapper<Scalars['HexColorCode']>;
  Hexadecimal: ResolverTypeWrapper<Scalars['Hexadecimal']>;
  IBAN: ResolverTypeWrapper<Scalars['IBAN']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IP: ResolverTypeWrapper<Scalars['IP']>;
  IPCPatent: ResolverTypeWrapper<Scalars['IPCPatent']>;
  IPv4: ResolverTypeWrapper<Scalars['IPv4']>;
  IPv6: ResolverTypeWrapper<Scalars['IPv6']>;
  ISBN: ResolverTypeWrapper<Scalars['ISBN']>;
  ISO8601Duration: ResolverTypeWrapper<Scalars['ISO8601Duration']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  JWT: ResolverTypeWrapper<Scalars['JWT']>;
  LCCSubclass: ResolverTypeWrapper<Scalars['LCCSubclass']>;
  Latitude: ResolverTypeWrapper<Scalars['Latitude']>;
  LocalDate: ResolverTypeWrapper<Scalars['LocalDate']>;
  LocalDateTime: ResolverTypeWrapper<Scalars['LocalDateTime']>;
  LocalEndTime: ResolverTypeWrapper<Scalars['LocalEndTime']>;
  LocalTime: ResolverTypeWrapper<Scalars['LocalTime']>;
  Locale: ResolverTypeWrapper<Scalars['Locale']>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Longitude: ResolverTypeWrapper<Scalars['Longitude']>;
  MAC: ResolverTypeWrapper<Scalars['MAC']>;
  Model: ResolverTypeWrapper<Model>;
  MusicOption: ResolverTypeWrapper<MusicOption>;
  Mutation: ResolverTypeWrapper<{}>;
  NegativeFloat: ResolverTypeWrapper<Scalars['NegativeFloat']>;
  NegativeInt: ResolverTypeWrapper<Scalars['NegativeInt']>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']>;
  NonPositiveFloat: ResolverTypeWrapper<Scalars['NonPositiveFloat']>;
  NonPositiveInt: ResolverTypeWrapper<Scalars['NonPositiveInt']>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>;
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']>;
  Port: ResolverTypeWrapper<Scalars['Port']>;
  PositiveFloat: ResolverTypeWrapper<Scalars['PositiveFloat']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']>;
  PostalCode: ResolverTypeWrapper<Scalars['PostalCode']>;
  ProfilePicture: ResolverTypeWrapper<ProfilePicture>;
  Query: ResolverTypeWrapper<{}>;
  RGB: ResolverTypeWrapper<Scalars['RGB']>;
  RGBA: ResolverTypeWrapper<Scalars['RGBA']>;
  Rating: ResolverTypeWrapper<Rating>;
  Receipts: ResolverTypeWrapper<Receipts>;
  RegisterUser: ResolverTypeWrapper<RegisterUser>;
  Res: ResolverTypeWrapper<Res>;
  Roles: ResolverTypeWrapper<Roles>;
  RoutingNumber: ResolverTypeWrapper<Scalars['RoutingNumber']>;
  SafeInt: ResolverTypeWrapper<Scalars['SafeInt']>;
  SemVer: ResolverTypeWrapper<Scalars['SemVer']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  TimeZone: ResolverTypeWrapper<Scalars['TimeZone']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  Trip: ResolverTypeWrapper<Trip>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  USCurrency: ResolverTypeWrapper<Scalars['USCurrency']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  UnsignedFloat: ResolverTypeWrapper<Scalars['UnsignedFloat']>;
  UnsignedInt: ResolverTypeWrapper<Scalars['UnsignedInt']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  UserCreated: ResolverTypeWrapper<UserCreated>;
  UserInfo: ResolverTypeWrapper<UserInfo>;
  UtcOffset: ResolverTypeWrapper<Scalars['UtcOffset']>;
  Void: ResolverTypeWrapper<Scalars['Void']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  About: About;
  AccountNumber: Scalars['AccountNumber'];
  Badge: Badge;
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  Byte: Scalars['Byte'];
  Car: Car;
  CarPicture: CarPicture;
  ChatOption: ChatOption;
  CountryCode: Scalars['CountryCode'];
  Cuid: Scalars['Cuid'];
  Currency: Scalars['Currency'];
  DID: Scalars['DID'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  DateTimeISO: Scalars['DateTimeISO'];
  DeweyDecimal: Scalars['DeweyDecimal'];
  Duration: Scalars['Duration'];
  EmailAddress: Scalars['EmailAddress'];
  GUID: Scalars['GUID'];
  HSL: Scalars['HSL'];
  HSLA: Scalars['HSLA'];
  HexColorCode: Scalars['HexColorCode'];
  Hexadecimal: Scalars['Hexadecimal'];
  IBAN: Scalars['IBAN'];
  ID: Scalars['ID'];
  IP: Scalars['IP'];
  IPCPatent: Scalars['IPCPatent'];
  IPv4: Scalars['IPv4'];
  IPv6: Scalars['IPv6'];
  ISBN: Scalars['ISBN'];
  ISO8601Duration: Scalars['ISO8601Duration'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  JWT: Scalars['JWT'];
  LCCSubclass: Scalars['LCCSubclass'];
  Latitude: Scalars['Latitude'];
  LocalDate: Scalars['LocalDate'];
  LocalDateTime: Scalars['LocalDateTime'];
  LocalEndTime: Scalars['LocalEndTime'];
  LocalTime: Scalars['LocalTime'];
  Locale: Scalars['Locale'];
  Long: Scalars['Long'];
  Longitude: Scalars['Longitude'];
  MAC: Scalars['MAC'];
  Model: Model;
  MusicOption: MusicOption;
  Mutation: {};
  NegativeFloat: Scalars['NegativeFloat'];
  NegativeInt: Scalars['NegativeInt'];
  NonEmptyString: Scalars['NonEmptyString'];
  NonNegativeFloat: Scalars['NonNegativeFloat'];
  NonNegativeInt: Scalars['NonNegativeInt'];
  NonPositiveFloat: Scalars['NonPositiveFloat'];
  NonPositiveInt: Scalars['NonPositiveInt'];
  ObjectID: Scalars['ObjectID'];
  PhoneNumber: Scalars['PhoneNumber'];
  Port: Scalars['Port'];
  PositiveFloat: Scalars['PositiveFloat'];
  PositiveInt: Scalars['PositiveInt'];
  PostalCode: Scalars['PostalCode'];
  ProfilePicture: ProfilePicture;
  Query: {};
  RGB: Scalars['RGB'];
  RGBA: Scalars['RGBA'];
  Rating: Rating;
  Receipts: Receipts;
  RegisterUser: RegisterUser;
  Res: Res;
  Roles: Roles;
  RoutingNumber: Scalars['RoutingNumber'];
  SafeInt: Scalars['SafeInt'];
  SemVer: Scalars['SemVer'];
  String: Scalars['String'];
  Time: Scalars['Time'];
  TimeZone: Scalars['TimeZone'];
  Timestamp: Scalars['Timestamp'];
  Trip: Trip;
  URL: Scalars['URL'];
  USCurrency: Scalars['USCurrency'];
  UUID: Scalars['UUID'];
  UnsignedFloat: Scalars['UnsignedFloat'];
  UnsignedInt: Scalars['UnsignedInt'];
  Upload: Scalars['Upload'];
  User: User;
  UserCreated: UserCreated;
  UserInfo: UserInfo;
  UtcOffset: Scalars['UtcOffset'];
  Void: Scalars['Void'];
};

export type AboutResolvers<ContextType = any, ParentType extends ResolversParentTypes['About'] = ResolversParentTypes['About']> = {
  animal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  chatOption?: Resolver<Maybe<ResolversTypes['ChatOption']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  musicOption?: Resolver<Maybe<ResolversTypes['MusicOption']>, ParentType, ContextType>;
  smoke?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface AccountNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AccountNumber'], any> {
  name: 'AccountNumber';
}

export type BadgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Badge'] = ResolversParentTypes['Badge']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export type CarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Car'] = ResolversParentTypes['Car']> = {
  carPictures?: Resolver<Maybe<Array<Maybe<ResolversTypes['CarPicture']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType>;
  seat?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarPictureResolvers<ContextType = any, ParentType extends ResolversParentTypes['CarPicture'] = ResolversParentTypes['CarPicture']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChatOption'] = ResolversParentTypes['ChatOption']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CountryCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
  name: 'CountryCode';
}

export interface CuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cuid'], any> {
  name: 'Cuid';
}

export interface CurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Currency'], any> {
  name: 'Currency';
}

export interface DidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DID'], any> {
  name: 'DID';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DateTimeIsoScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeISO'], any> {
  name: 'DateTimeISO';
}

export interface DeweyDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DeweyDecimal'], any> {
  name: 'DeweyDecimal';
}

export interface DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Duration'], any> {
  name: 'Duration';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID';
}

export interface HslScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSL'], any> {
  name: 'HSL';
}

export interface HslaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSLA'], any> {
  name: 'HSLA';
}

export interface HexColorCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColorCode'], any> {
  name: 'HexColorCode';
}

export interface HexadecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hexadecimal'], any> {
  name: 'Hexadecimal';
}

export interface IbanScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IBAN'], any> {
  name: 'IBAN';
}

export interface IpScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IP'], any> {
  name: 'IP';
}

export interface IpcPatentScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPCPatent'], any> {
  name: 'IPCPatent';
}

export interface IPv4ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv4'], any> {
  name: 'IPv4';
}

export interface IPv6ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv6'], any> {
  name: 'IPv6';
}

export interface IsbnScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISBN'], any> {
  name: 'ISBN';
}

export interface Iso8601DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Duration'], any> {
  name: 'ISO8601Duration';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT';
}

export interface LccSubclassScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LCCSubclass'], any> {
  name: 'LCCSubclass';
}

export interface LatitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Latitude'], any> {
  name: 'Latitude';
}

export interface LocalDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDate'], any> {
  name: 'LocalDate';
}

export interface LocalDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDateTime'], any> {
  name: 'LocalDateTime';
}

export interface LocalEndTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalEndTime'], any> {
  name: 'LocalEndTime';
}

export interface LocalTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalTime'], any> {
  name: 'LocalTime';
}

export interface LocaleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Locale'], any> {
  name: 'Locale';
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export interface LongitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Longitude'], any> {
  name: 'Longitude';
}

export interface MacScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MAC'], any> {
  name: 'MAC';
}

export type ModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Model'] = ResolversParentTypes['Model']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MusicOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MusicOption'] = ResolversParentTypes['MusicOption']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addPicture?: Resolver<ResolversTypes['CarPicture'], ParentType, ContextType, RequireFields<MutationAddPictureArgs, 'carId' | 'file'>>;
  addProfilePicture?: Resolver<ResolversTypes['ProfilePicture'], ParentType, ContextType, RequireFields<MutationAddProfilePictureArgs, 'file' | 'pictureID'>>;
  createAbout?: Resolver<Maybe<ResolversTypes['About']>, ParentType, ContextType, RequireFields<MutationCreateAboutArgs, 'animal' | 'chatOptionId' | 'description' | 'musicOptionId' | 'smoke'>>;
  createBadge?: Resolver<Maybe<ResolversTypes['Badge']>, ParentType, ContextType, RequireFields<MutationCreateBadgeArgs, 'description' | 'name'>>;
  createCar?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<MutationCreateCarArgs, 'seat'>>;
  createChatOption?: Resolver<Maybe<ResolversTypes['ChatOption']>, ParentType, ContextType, RequireFields<MutationCreateChatOptionArgs, 'content'>>;
  createModel?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType, Partial<MutationCreateModelArgs>>;
  createMusicOption?: Resolver<Maybe<ResolversTypes['MusicOption']>, ParentType, ContextType, RequireFields<MutationCreateMusicOptionArgs, 'content'>>;
  createRating?: Resolver<Maybe<ResolversTypes['Rating']>, ParentType, ContextType, Partial<MutationCreateRatingArgs>>;
  createReceipts?: Resolver<Maybe<ResolversTypes['Receipts']>, ParentType, ContextType, Partial<MutationCreateReceiptsArgs>>;
  createRole?: Resolver<Maybe<ResolversTypes['Roles']>, ParentType, ContextType, Partial<MutationCreateRoleArgs>>;
  createTrip?: Resolver<Maybe<ResolversTypes['Trip']>, ParentType, ContextType, Partial<MutationCreateTripArgs>>;
  createUser?: Resolver<Maybe<ResolversTypes['UserCreated']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'date_of_birth' | 'email' | 'password' | 'phone' | 'username'>>;
  createUserInfo?: Resolver<Maybe<ResolversTypes['UserInfo']>, ParentType, ContextType, Partial<MutationCreateUserInfoArgs>>;
  deleteBadge?: Resolver<Maybe<ResolversTypes['Badge']>, ParentType, ContextType, RequireFields<MutationDeleteBadgeArgs, 'id'>>;
  deleteCar?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<MutationDeleteCarArgs, 'id'>>;
  deleteModel?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType, RequireFields<MutationDeleteModelArgs, 'id'>>;
  deleteRating?: Resolver<Maybe<ResolversTypes['Rating']>, ParentType, ContextType, RequireFields<MutationDeleteRatingArgs, 'id'>>;
  deleteReceipts?: Resolver<Maybe<ResolversTypes['Receipts']>, ParentType, ContextType, RequireFields<MutationDeleteReceiptsArgs, 'id'>>;
  deleteRole?: Resolver<Maybe<ResolversTypes['Roles']>, ParentType, ContextType, RequireFields<MutationDeleteRoleArgs, 'id'>>;
  deleteTrip?: Resolver<Maybe<ResolversTypes['Trip']>, ParentType, ContextType, RequireFields<MutationDeleteTripArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['Res']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  loginUser?: Resolver<Maybe<ResolversTypes['RegisterUser']>, ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'email' | 'password'>>;
  selectTrip?: Resolver<Maybe<ResolversTypes['Trip']>, ParentType, ContextType, RequireFields<MutationSelectTripArgs, 'tripId'>>;
  updateAbout?: Resolver<Maybe<ResolversTypes['About']>, ParentType, ContextType, RequireFields<MutationUpdateAboutArgs, 'id'>>;
  updateBadge?: Resolver<Maybe<ResolversTypes['Badge']>, ParentType, ContextType, RequireFields<MutationUpdateBadgeArgs, 'id'>>;
  updateCar?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<MutationUpdateCarArgs, 'id'>>;
  updateChatOption?: Resolver<Maybe<ResolversTypes['ChatOption']>, ParentType, ContextType, RequireFields<MutationUpdateChatOptionArgs, 'content' | 'id'>>;
  updateModel?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType, RequireFields<MutationUpdateModelArgs, 'id'>>;
  updateMusicAndChatOption?: Resolver<Maybe<ResolversTypes['About']>, ParentType, ContextType, RequireFields<MutationUpdateMusicAndChatOptionArgs, 'chatOptionId' | 'id' | 'musicOptionId'>>;
  updateMusicOption?: Resolver<Maybe<ResolversTypes['MusicOption']>, ParentType, ContextType, RequireFields<MutationUpdateMusicOptionArgs, 'content' | 'id'>>;
  updateRating?: Resolver<Maybe<ResolversTypes['Rating']>, ParentType, ContextType, RequireFields<MutationUpdateRatingArgs, 'id'>>;
  updateReceipts?: Resolver<Maybe<ResolversTypes['Receipts']>, ParentType, ContextType, RequireFields<MutationUpdateReceiptsArgs, 'id'>>;
  updateRole?: Resolver<Maybe<ResolversTypes['Roles']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'id'>>;
  updateTrip?: Resolver<Maybe<ResolversTypes['Trip']>, ParentType, ContextType, RequireFields<MutationUpdateTripArgs, 'id'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'date_of_birth' | 'email' | 'firstname' | 'id' | 'lastname' | 'password' | 'phone' | 'username'>>;
  updateUserInfo?: Resolver<Maybe<ResolversTypes['UserInfo']>, ParentType, ContextType, RequireFields<MutationUpdateUserInfoArgs, 'id'>>;
};

export interface NegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeFloat'], any> {
  name: 'NegativeFloat';
}

export interface NegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeInt'], any> {
  name: 'NegativeInt';
}

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat';
}

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export interface NonPositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveFloat'], any> {
  name: 'NonPositiveFloat';
}

export interface NonPositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveInt'], any> {
  name: 'NonPositiveInt';
}

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber';
}

export interface PortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Port'], any> {
  name: 'Port';
}

export interface PositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveFloat'], any> {
  name: 'PositiveFloat';
}

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export interface PostalCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PostalCode'], any> {
  name: 'PostalCode';
}

export type ProfilePictureResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfilePicture'] = ResolversParentTypes['ProfilePicture']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  Badge?: Resolver<Maybe<ResolversTypes['Badge']>, ParentType, ContextType, RequireFields<QueryBadgeArgs, 'id'>>;
  Badges?: Resolver<Maybe<Array<Maybe<ResolversTypes['Badge']>>>, ParentType, ContextType>;
  Model?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType, RequireFields<QueryModelArgs, 'id'>>;
  Models?: Resolver<Maybe<Array<Maybe<ResolversTypes['Model']>>>, ParentType, ContextType>;
  Rating?: Resolver<Maybe<ResolversTypes['Rating']>, ParentType, ContextType, RequireFields<QueryRatingArgs, 'id'>>;
  Ratings?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rating']>>>, ParentType, ContextType>;
  Receipt?: Resolver<Maybe<ResolversTypes['Receipts']>, ParentType, ContextType, RequireFields<QueryReceiptArgs, 'id'>>;
  Receipts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Receipts']>>>, ParentType, ContextType>;
  Role?: Resolver<Maybe<ResolversTypes['Roles']>, ParentType, ContextType, RequireFields<QueryRoleArgs, 'id'>>;
  Roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Roles']>>>, ParentType, ContextType>;
  UserTrips?: Resolver<Maybe<Array<Maybe<ResolversTypes['Trip']>>>, ParentType, ContextType>;
  UserTripsLoggedUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['Trip']>>>, ParentType, ContextType>;
  about?: Resolver<Maybe<ResolversTypes['About']>, ParentType, ContextType, RequireFields<QueryAboutArgs, 'id'>>;
  abouts?: Resolver<Maybe<Array<Maybe<ResolversTypes['About']>>>, ParentType, ContextType>;
  car?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<QueryCarArgs, 'id'>>;
  cars?: Resolver<Maybe<Array<Maybe<ResolversTypes['Car']>>>, ParentType, ContextType>;
  chatOption?: Resolver<Maybe<ResolversTypes['ChatOption']>, ParentType, ContextType, RequireFields<QueryChatOptionArgs, 'id'>>;
  chatOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChatOption']>>>, ParentType, ContextType>;
  checkUserLogged?: Resolver<Maybe<ResolversTypes['Res']>, ParentType, ContextType>;
  getTrip?: Resolver<Maybe<ResolversTypes['Trip']>, ParentType, ContextType, RequireFields<QueryGetTripArgs, 'id'>>;
  getTripSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['Trip']>>>, ParentType, ContextType, Partial<QueryGetTripSearchArgs>>;
  getTrips?: Resolver<Maybe<Array<Maybe<ResolversTypes['Trip']>>>, ParentType, ContextType>;
  getUserInfo?: Resolver<Maybe<ResolversTypes['UserInfo']>, ParentType, ContextType, RequireFields<QueryGetUserInfoArgs, 'id'>>;
  getUserInfos?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserInfo']>>>, ParentType, ContextType>;
  musicOption?: Resolver<Maybe<ResolversTypes['MusicOption']>, ParentType, ContextType, RequireFields<QueryMusicOptionArgs, 'id'>>;
  musicOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['MusicOption']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUserArgs>>;
  userLogged?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export interface RgbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGB'], any> {
  name: 'RGB';
}

export interface RgbaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBA'], any> {
  name: 'RGBA';
}

export type RatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rating'] = ResolversParentTypes['Rating']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReceiptsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Receipts'] = ResolversParentTypes['Receipts']> = {
  file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisterUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterUser'] = ResolversParentTypes['RegisterUser']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResResolvers<ContextType = any, ParentType extends ResolversParentTypes['Res'] = ResolversParentTypes['Res']> = {
  msg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Roles'] = ResolversParentTypes['Roles']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RoutingNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RoutingNumber'], any> {
  name: 'RoutingNumber';
}

export interface SafeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SafeInt'], any> {
  name: 'SafeInt';
}

export interface SemVerScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SemVer'], any> {
  name: 'SemVer';
}

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface TimeZoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeZone'], any> {
  name: 'TimeZone';
}

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TripResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trip'] = ResolversParentTypes['Trip']> = {
  arrival_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  date_departure?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  departure_places?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destination?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hour_departure?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  passengers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  place_available?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface UsCurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['USCurrency'], any> {
  name: 'USCurrency';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export interface UnsignedFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedFloat'], any> {
  name: 'UnsignedFloat';
}

export interface UnsignedIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedInt'], any> {
  name: 'UnsignedInt';
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  cars?: Resolver<Maybe<Array<Maybe<ResolversTypes['Car']>>>, ParentType, ContextType>;
  date_of_birth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trips?: Resolver<Maybe<Array<Maybe<ResolversTypes['Trip']>>>, ParentType, ContextType>;
  userInfo?: Resolver<Maybe<ResolversTypes['UserInfo']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCreatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCreated'] = ResolversParentTypes['UserCreated']> = {
  cars?: Resolver<Maybe<Array<Maybe<ResolversTypes['Car']>>>, ParentType, ContextType>;
  date_of_birth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trips?: Resolver<Maybe<Array<Maybe<ResolversTypes['Trip']>>>, ParentType, ContextType>;
  userInfo?: Resolver<Maybe<ResolversTypes['UserInfo']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInfo'] = ResolversParentTypes['UserInfo']> = {
  about?: Resolver<Maybe<ResolversTypes['About']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  profilPictureId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UtcOffsetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UtcOffset'], any> {
  name: 'UtcOffset';
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = any> = {
  About?: AboutResolvers<ContextType>;
  AccountNumber?: GraphQLScalarType;
  Badge?: BadgeResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Byte?: GraphQLScalarType;
  Car?: CarResolvers<ContextType>;
  CarPicture?: CarPictureResolvers<ContextType>;
  ChatOption?: ChatOptionResolvers<ContextType>;
  CountryCode?: GraphQLScalarType;
  Cuid?: GraphQLScalarType;
  Currency?: GraphQLScalarType;
  DID?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DateTimeISO?: GraphQLScalarType;
  DeweyDecimal?: GraphQLScalarType;
  Duration?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  GUID?: GraphQLScalarType;
  HSL?: GraphQLScalarType;
  HSLA?: GraphQLScalarType;
  HexColorCode?: GraphQLScalarType;
  Hexadecimal?: GraphQLScalarType;
  IBAN?: GraphQLScalarType;
  IP?: GraphQLScalarType;
  IPCPatent?: GraphQLScalarType;
  IPv4?: GraphQLScalarType;
  IPv6?: GraphQLScalarType;
  ISBN?: GraphQLScalarType;
  ISO8601Duration?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  JWT?: GraphQLScalarType;
  LCCSubclass?: GraphQLScalarType;
  Latitude?: GraphQLScalarType;
  LocalDate?: GraphQLScalarType;
  LocalDateTime?: GraphQLScalarType;
  LocalEndTime?: GraphQLScalarType;
  LocalTime?: GraphQLScalarType;
  Locale?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  Longitude?: GraphQLScalarType;
  MAC?: GraphQLScalarType;
  Model?: ModelResolvers<ContextType>;
  MusicOption?: MusicOptionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NegativeFloat?: GraphQLScalarType;
  NegativeInt?: GraphQLScalarType;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  NonPositiveFloat?: GraphQLScalarType;
  NonPositiveInt?: GraphQLScalarType;
  ObjectID?: GraphQLScalarType;
  PhoneNumber?: GraphQLScalarType;
  Port?: GraphQLScalarType;
  PositiveFloat?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  PostalCode?: GraphQLScalarType;
  ProfilePicture?: ProfilePictureResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RGB?: GraphQLScalarType;
  RGBA?: GraphQLScalarType;
  Rating?: RatingResolvers<ContextType>;
  Receipts?: ReceiptsResolvers<ContextType>;
  RegisterUser?: RegisterUserResolvers<ContextType>;
  Res?: ResResolvers<ContextType>;
  Roles?: RolesResolvers<ContextType>;
  RoutingNumber?: GraphQLScalarType;
  SafeInt?: GraphQLScalarType;
  SemVer?: GraphQLScalarType;
  Time?: GraphQLScalarType;
  TimeZone?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  Trip?: TripResolvers<ContextType>;
  URL?: GraphQLScalarType;
  USCurrency?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
  UnsignedFloat?: GraphQLScalarType;
  UnsignedInt?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserCreated?: UserCreatedResolvers<ContextType>;
  UserInfo?: UserInfoResolvers<ContextType>;
  UtcOffset?: GraphQLScalarType;
  Void?: GraphQLScalarType;
};

