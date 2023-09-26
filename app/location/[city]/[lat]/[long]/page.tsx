import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import HumidityChart from "@/components/Charts/HumidityChart";
import RainChart from "@/components/Charts/RainChart";
import TemperatureChart from "@/components/Charts/TemperatureChart";
import InformationPanel from "@/components/InformationPanel";
import StatCards from "@/components/StatCard";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import { IRoot } from "@/typing";

// revalidate every 60 seconds
export const revalidate = 60;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

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

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/** Information Panel Component */}
      <InformationPanel city={city} lat={lat} long={long} results={results} />

      {/** Main Content */}
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at:{" "}
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>

          {/* <div className="m-2 mb-10">
            Callout Card
            <CalloutCard message={"No se pudo mi loco"} warning />
          </div>  */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            {/** Stat Cards */}
            <StatCards
              title="Maximum Temperature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="yellow"
            />

            <StatCards
              title="Minimum Temperature"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
              color="green"
            />

            <div>
              <StatCards
                title="UV Index"
                metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                color="rose"
              />

              {/** UV high recomendation */}
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message="UV Index is high today, be sure to wear SPF"
                  warning
                />
              )}
            </div>

            <div className="flex space-x-3">
              <StatCards
                title="Wind Speed"
                metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                color="cyan"
              />

              <StatCards
                title="Wind Direction"
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color="violet"
              />
            </div>
          </div>
        </div>

        <hr className="mb-5" />

        <div className="space-y-3">
          {/** Functions cannot be passed directly to Client Components 
           * unless you explicitly expose it by marking it with "use server". 
           * 
          This error can be fixed if the component below 👇 
          has the directly of "use client"
          */}

          {/** TempChart */}
          <TemperatureChart results={results} />

          {/** RainChart */}
          <RainChart results={results} />

          {/** HumidityChart */}
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
