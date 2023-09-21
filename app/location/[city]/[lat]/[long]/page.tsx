type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

function WeatherPage({ params: { city, lat, long } }: Props) {
  return <div>WeatherPage</div>;
}

export default WeatherPage;
