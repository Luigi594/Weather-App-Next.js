import { getClient } from "@/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import { IRoot } from "@/typing";
import { ApolloError } from "@apollo/client";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  try {
    const { data } = await client.query({
      query: fetchWeatherQuery,
      variables: {
        current_weather: "true",
        longitude: long,
        latitude: lat,
        timezone: "GMT",
      },
    });

    const results: IRoot = data.myQuery;
    console.log(results);
  } catch (error: any) {
    console.log(error);
  }

  return <div>{city}</div>;
}

export default WeatherPage;
