export interface ICountryOptions {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
}

export interface ICitiesOptions {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
}
