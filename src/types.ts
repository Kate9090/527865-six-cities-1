interface OfferLocation {
  latitude: number,
  longitude: number,
}

interface City {
  name: string,
  location: Location,
}

interface Location {
  latitude: number,
  longitude: number,
}

interface HostObject {
  name: string,
  id: number,
  isPro: boolean,
  avatarUrl: string
}

export interface Review {
  comment: string,
  rating: number,
}

export interface SignInObject {
  email: string,
  password: string
}

export interface UserData {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  isPro: boolean,
}

export interface FavouriteOfferType {
  src: string,
  title: string,
  price: number,
  rating: number,
  name: string,
  location: OfferLocation,
  type: string,
  city: City,
  id: number,
}

export interface OfferType {
  src: string,
  title: string,
  price: number,
  rating: number,
  name: string,
  location: OfferLocation,
  type: string,
  city: City,
  id: number,
  isPremium: boolean,
  isPro: boolean,
  description: string,
  maxAdults: number,
  bedrooms: number,
  host: HostObject,
  images: string[],
  goods: string[],
}

