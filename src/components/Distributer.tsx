"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LoaderCircle } from "lucide-react";

const Distributer = () => {
  const getDistributer = async () => {
    const { data } = await axios.get("/api/get-distributer-detail");
    return data;
  };

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["distributer"],
    queryFn: getDistributer,
    staleTime: 30000,
  });

  if (isLoading) {
    return (
      <Card className="w-72 h-64 flex justify-center items-center text-center ">
        <CardContent>
          <LoaderCircle className="animate-spin text-green-600" size={72} />
        </CardContent>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card className="flex flex-col justify-center items-center h-64">
        <CardContent className="flex justify-center items-center text-center ">
          <p className="text-red-500">Error fetching distributor data.</p>
          <button
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {data?.distributers?.map((distributer: any) => (
        <Card key={distributer._id} className="mt-4 w-full">
          <CardHeader>
            <CardTitle>Seed Distributor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Name:</span>
                <span>{distributer.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Email:</span>
                <span>{distributer.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Phone:</span>
                <span>{distributer.phone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Address:</span>
                <span>{distributer.address}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Area of Distribution:</span>
                <span>{distributer.areaOfDistribution || "N/A"}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Distributer;
