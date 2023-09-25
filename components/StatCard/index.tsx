"use client";

import { Card, Color, Metric, Text } from "@tremor/react";

interface IColorsStatCard {
  title: string;
  metric: string;
  color: Color;
}

function StatCards({ title, metric, color }: IColorsStatCard) {
  return (
    <Card decoration="top" decorationColor={color}>
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}

export default StatCards;
