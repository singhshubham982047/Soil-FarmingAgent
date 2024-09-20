import { auth } from "@/auth";
import SoilList from "@/components/SoilList";
import SoilProtection from "@/components/SoilProtection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  return (
    <>
      {session?.user ? (
        <div className="flex  justify-center items-center ">
          <Tabs defaultValue="soil-protection" className="w-full mt-20">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="soil-protection">Soil Protection</TabsTrigger>
              <TabsTrigger value="soil-details">Soil Details</TabsTrigger>
            </TabsList>
            <TabsContent value="soil-protection">
              <SoilProtection />
            </TabsContent>
            <TabsContent value="soil-details">
              <SoilList />
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        redirect("/sign-in")
      )}
    </>
  );
};

export default page;
