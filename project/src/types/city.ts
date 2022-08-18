export type CityType = {
  id: number;
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
};
