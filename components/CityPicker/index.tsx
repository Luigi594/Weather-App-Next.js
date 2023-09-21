"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ICitiesOptions, ICountryOptions } from "@/typing";
import { GlobeAltIcon } from "@heroicons/react/20/solid";
import Select, { SingleValue } from "react-select";
import useGetCountries from "@/hooks/useGetCountries";
import useGetCities from "@/hooks/useGetCities";

function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<ICountryOptions>({
    value: {
      latitude: "",
      longitude: "",
      isoCode: "",
    },
    label: "",
  });

  const [selectedCity, setSelectedCity] = useState<ICitiesOptions>({
    value: {
      latitude: "",
      longitude: "",
      stateCode: "",
      countryCode: "",
      name: "",
    },
    label: "",
  });

  const handleSelectedCountry = (option: ICountryOptions) => {
    setSelectedCountry(option);
    setSelectedCity(selectedCity);
  };

  const handleSelectedCity = (option: ICitiesOptions) => {
    setSelectedCity(option);

    // folder here should be called location inside of app folder
    // square brackets is for dynamic routing
    router.push(
      `/location/${option.value.name}/${option.value.latitude}/${option.value.longitude}`
    );
  };

  const { countries } = useGetCountries();
  const { cities } = useGetCities({ state: selectedCountry });
  const router = useRouter();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <GlobeAltIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>

        <Select
          instanceId={"country"}
          className="text-black"
          value={selectedCountry}
          onChange={(newValue: SingleValue<ICountryOptions>) =>
            handleSelectedCountry(newValue as ICountryOptions)
          }
          options={countries}
        />
      </div>

      {selectedCountry && selectedCountry.label && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeAltIcon className="h-5 w-5 text-white" />
            <label htmlFor="country">City</label>
          </div>

          <Select
            instanceId={"city"}
            className="text-black"
            value={selectedCity}
            onChange={(newValue: SingleValue<ICitiesOptions>) =>
              handleSelectedCity(newValue as ICitiesOptions)
            }
            options={cities}
          />
        </div>
      )}
    </div>
  );
}

export default CityPicker;
