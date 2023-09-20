import { ICountryOptions } from "@/typing";
import { Country } from "country-state-city";

function useGetCountries() {
  const countries: ICountryOptions[] = Country.getAllCountries().map(
    (country) => {
      return {
        value: {
          latitude: country.latitude,
          longitude: country.longitude,
          isoCode: country.isoCode,
        },
        label: country.name,
      };
    }
  );

  return { countries };
}

export default useGetCountries;
