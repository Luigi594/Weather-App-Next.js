"use client";

import { IRoot } from "@/typing";
import { Card, AreaChart, Title } from "@tremor/react";

type Props = {
  results: IRoot;
};

function HumidityChart({ results }: Props) {
  // give only the first 24 hours
  const hourly = results.hourly.time
    .map((time) =>
      new Date(time).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      })
    )
    .slice(0, 24);

  const data = hourly.map((hour, index) => ({
    time: Number(hour),
    "Humidity (%)": results.hourly.relativehumidity_2m[index],
  }));

  const dataFormatter = (number: number) => `${number}%`;

  return (
    <Card>
      <Title>Humidity Levels</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Humidity (%)"]}
        colors={["teal"]}
        minValue={0}
        valueFormatter={dataFormatter}
        yAxisWidth={45}
      />
    </Card>
  );
}

export default HumidityChart;
