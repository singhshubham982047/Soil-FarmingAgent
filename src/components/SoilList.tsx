"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Card, CardTitle, CardContent } from "./ui/card";
import { LoaderCircle } from "lucide-react";

interface SoilType {
  _id?: string;
  soilType: string;
  description: string;
  characteristics: string;
  crops: string;
  chemicalProperties: string;
  locations: string;
}

const SoilList = () => {
  const getSoilType = async () => {
    const { data } = await axios.get("/api/get-soil-detail");
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["soil"],
    queryFn: getSoilType,
    staleTime: 30000,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-dvh">
        <LoaderCircle className="animate-spin text-green-600" size={100} />
      </div>
    );
  if (!data)
    return <div className="text-center text-lg">No data available</div>;

  return (
    <div className="flex flex-col justify-center items-center space-y-2 m-6  min-h-dvh ">
      {data?.soils.map((soilType: SoilType) => (
        <Card key={soilType._id} className="w-full rounded-sm p-4 space-y-4 ">
          <CardTitle className="flex items-center text-center justify-center font-mono text-lg bg-green-700 text-white/85 ">
            {soilType.soilType}
          </CardTitle>
          <CardContent className="space-y-3">
            <p className="text-sm mt-2">{soilType.description}</p>
            <h1 className="font-semibold">
              Characteristic of {soilType.soilType}:
            </h1>
            <p className="text-sm">{soilType.characteristics}</p>
            <h1 className="font-semibold">
              Suitable Crops {soilType.soilType}
            </h1>
            <p className="text-sm">{soilType.crops}</p>
            <h1 className="font-semibold">
              Chemical Properties of {soilType.soilType}
            </h1>
            <p className="text-sm">{soilType.chemicalProperties}</p>
            <h1 className="font-semibold">Location of {soilType.soilType}</h1>
            <p className="text-sm">{soilType.locations}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SoilList;
