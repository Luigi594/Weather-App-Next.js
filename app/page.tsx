import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1c4693] to-[#286ad5] p-10 flex flex-col justify-center items-center">
      <Card className="rounded-md max-w-4xl mx-auto">
        <Text className="text-6xl text-center font-bold mb-10">
          Weather API
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by Next.js 13.5.2, Tailwind CSS, Tremor 2.0 and more!
        </Subtitle>

        <Divider className="my-10" />

        <Card className="rounded-md bg-gradient-to-br from-[#1c4693] to-[#286ad5]">
          <CityPicker />
        </Card>
      </Card>
    </main>
  );
}
