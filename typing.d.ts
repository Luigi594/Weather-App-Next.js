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

export interface ICurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
}

export interface IDaily {
  apparent_temperature_max: [number];
  apparent_temperature_min: [number];
  sunrise: [string];
  sunset: [string];
  temperature_2m_max: [number];
  temperature_2m_min: [number];
  time: [string];
  uv_index_clear_sky_max: [number];
  uv_index_max: [number];
  weathercode: [number];
}

export interface IDailyUnits {
  apparent_temperature_max: string;
  apparent_temperature_min: string;
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  uv_index_clear_sky_max: string;
  uv_index_max: string;
  weathercode: string;
}

export interface IHourly {
  time: [string];
  temperature_2m: [number];
  relativehumidity_2m: [number];
  dewpoint_2m: [number];
  apparent_temperature: [number];
  precipitation_probability: [number];
  precipitation: [number];
  rain: [number];
  showers: [number];
  snowfall: [number];
  snow_depth: [number];
  windgusts_10m: [number];
  uv_index: [number];
  uv_index_clear_sky: [number];
}

export interface IHourlyUnits {
  time: string;
  temperature_2m: string;
  relativehumidity_2m: string;
  dewpoint_2m: string;
  apparent_temperature: string;
  precipitation_probability: string;
  precipitation: string;
  rain: string;
  showers: string;
  snowfall: string;
  snow_depth: string;
  windgusts_10m: string;
  uv_index: string;
  uv_index_clear_sky: string;
}

export interface IRoot {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: ICurrentWeather;
  hourly_units: IHourlyUnits;
  hourly: IHourly;
  daily_units: IDailyUnits;
  daily: IDaily;
}
