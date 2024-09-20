"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DistributerSchema } from "@/schemas/distributerSchema";
import { SoilSchema } from "@/schemas/soilSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { AxiosError } from "axios";
import { UseQueryResult } from "@tanstack/react-query";

type DistributerData = z.infer<typeof DistributerSchema>;
type SoilData = z.infer<typeof SoilSchema>;

const SoilAndDistributerForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [soilType, setSoilType] = useState<string>("");
  const [crops, setCrops] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [chemicalProperties, setChemicalProperties] = useState<string>("");
  const [characteristics, setCharacteristics] = useState<string>("");
  const [locations, setLocations] = useState<string>("");
  const [areaOfDistribution, setAreaOfDistribution] = useState<string>("");

  const queryClient = useQueryClient();

  const submitDistributer = async (distributerData: DistributerData) => {
    const { data } = await axios.post("/api/add-distributer", distributerData);
    return data;
  };

  const submitSoilDetail = async (soilData: SoilData) => {
    const { data } = await axios.post("/api/add-soil-detail", soilData);
    return data;
  };

  const { mutate: distributionMutation } = useMutation({
    mutationFn: submitDistributer,
    onSuccess: () => {
      toast.success("Distributer added successfully");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error?.response?.data?.message || "Error Adding Distributer");
    },
  });

  const { mutate: soilMutation } = useMutation({
    mutationFn: submitSoilDetail,
    onSuccess: () => {
      toast.success("Soil Details added successfully");
    },
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: ["soil"] });
      const previousData = queryClient.getQueryData(["soil"]) as
        | UseQueryResult<SoilData[], Error>
        | undefined;
      queryClient.setQueryData(["soil"], (oldData: SoilData[] | undefined) => {
        return oldData ? [...oldData, newData] : [newData];
      });
      return {
        previousData,
      };
    },
    onError: (error: AxiosError<{ message: string }>, _data, context) => {
      queryClient.setQueriesData({ queryKey: ["soil"] }, context?.previousData);
      toast.error(
        error?.response?.data?.message || "Error Adding Soil Details"
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["soil"] });
    },
  });

  const handleSoilDetails = (event: React.FormEvent) => {
    event.preventDefault();
    const result = SoilSchema.safeParse({
      soilType,
      crops,
      characteristics,
      chemicalProperties,
      description,
      locations,
      areaOfDistribution,
    });

    if (!result.success) {
      return result.error.errors.forEach((err) => toast.error(err.message));
    }
    soilMutation(result.data);

    setSoilType("");
    setCrops("");
    setCharacteristics("");
    setChemicalProperties("");
    setDescription("");
    setLocations("");
    setAreaOfDistribution("");
  };

  const handleDistributer = (event: React.FormEvent) => {
    event.preventDefault();

    const result = DistributerSchema.safeParse({ name, email, phone, address });
    if (!result.success)
      return result.error.errors.forEach((err) => toast.error(err.message));

    distributionMutation(result.data);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="flex p-4 mt-10 justify-center items-center min-h-screen">
      <Tabs defaultValue="add-distributer" className="w-[500px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="add-distributer">Add Distributer</TabsTrigger>
          <TabsTrigger value="add-soil-detail">Add Soil Detail</TabsTrigger>
        </TabsList>
        <TabsContent value="add-distributer">
          <Card>
            <CardHeader>
              <CardTitle>Add Distributer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <form
                onSubmit={handleDistributer}
                className="flex flex-col gap-4"
              >
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <Label htmlFor="address">Area of Distribution</Label>
                <Input
                  id="areaOfDistribution"
                  type="text"
                  value={areaOfDistribution}
                  onChange={(e) => setAreaOfDistribution(e.target.value)}
                  required
                />

                <Button
                  className="bg-green-600 hover:bg-green-700"
                  type="submit"
                >
                  ADD
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="add-soil-detail">
          <Card>
            <CardHeader>
              <CardTitle>Add Soil Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSoilDetails}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="soilType">Soil Type</Label>
                    <Select
                      value={soilType}
                      onValueChange={setSoilType}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Soil" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Soil Type</SelectLabel>
                          <SelectItem value="Alluvial Soil">
                            Alluvial Soil
                          </SelectItem>
                          <SelectItem value="Black Soil">Black Soil</SelectItem>
                          <SelectItem value="Desert Soil">
                            Desert Soil
                          </SelectItem>
                          <SelectItem value="Red Soil">Red Soil</SelectItem>
                          <SelectItem value="Laterite Soils">
                            Laterite Soils
                          </SelectItem>
                          <SelectItem value="Mountain Soils">
                            Mountain Soils
                          </SelectItem>
                          <SelectItem value="Alkaline and Saline Soils">
                            Alkaline and Saline Soils
                          </SelectItem>
                          <SelectItem value="Peaty and Marshy Soils">
                            Peaty and Marshy Soils
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      type="text"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <Label htmlFor="crops">Crops</Label>
                    <Input
                      id="crops"
                      type="text"
                      required
                      value={crops}
                      onChange={(e) => setCrops(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="chemicalProperties">
                      Chemical Properties
                    </Label>
                    <Input
                      id="chemicalProperties"
                      type="text"
                      value={chemicalProperties}
                      onChange={(e) => setChemicalProperties(e.target.value)}
                    />
                    <Label htmlFor="characteristics">Characteristics</Label>
                    <Input
                      id="characteristics"
                      type="text"
                      required
                      value={characteristics}
                      onChange={(e) => setCharacteristics(e.target.value)}
                    />
                    <Label htmlFor="locations">Locations</Label>
                    <Input
                      id="locations"
                      type="text"
                      required
                      value={locations}
                      onChange={(e) => setLocations(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  type="submit"
                >
                  ADD
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SoilAndDistributerForm;
