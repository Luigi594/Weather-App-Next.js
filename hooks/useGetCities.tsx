import { ICitiesOptions, ICountryOptions } from "@/typing";
import { City } from "country-state-city";

type IGetCities = {
  state: ICountryOptions;
};

function useGetCities({ state }: IGetCities) {
  const cities: ICitiesOptions[] = City.getCitiesOfCountry(
    state.value.isoCode
  )?.map((city) => {
    return {
      value: {
        latitude: city.latitude,
        longitude: city.longitude,
        countryCode: city.countryCode,
        name: city.name,
        stateCode: city.stateCode,
      },
      label: city.name,
    };
  }) as ICitiesOptions[];

  return { cities };
}

export default useGetCities;
