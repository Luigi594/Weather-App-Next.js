import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query myQuery(
    $latitude: String
    $longitude: String
    $hourly: String = "temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky,is_day"
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $current_weather: String
    $timezone: String
  ) {
    myQuery(
      latitude: $latitude
      longitude: $longitude
      hourly: $hourly
      daily: $daily
      current_weather: $current_weather
      timezone: $timezone
    ) {
      latitude
      longitude
      generationtime_ms
      utc_offset_seconds
      timezone
      timezone_abbreviation
      elevation
      current_weather {
        temperature
        windspeed
        winddirection
        weathercode
        is_day
        time
      }
      hourly_units {
        time
        temperature_2m
        relativehumidity_2m
        dewpoint_2m
        apparent_temperature
        precipitation_probability
        precipitation
        rain
        showers
        snowfall
        snow_depth
        windgusts_10m
        uv_index
        uv_index_clear_sky
        is_day
      }
      hourly {
        time
        temperature_2m
        relativehumidity_2m
        dewpoint_2m
        apparent_temperature
        precipitation_probability
        precipitation
        rain
        showers
        snowfall
        snow_depth
        windgusts_10m
        uv_index
        uv_index_clear_sky
        is_day
      }
      daily_units {
        time
        weathercode
        temperature_2m_max
        temperature_2m_min
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        uv_index_max
        uv_index_clear_sky_max
      }
      daily {
        time
        weathercode
        temperature_2m_max
        temperature_2m_min
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        uv_index_max
        uv_index_clear_sky_max
      }
    }
  }
`;

export default fetchWeatherQuery;
