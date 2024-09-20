import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center m-6 min-h-screen">
      <div>
        <Image src="/contactHero.svg" alt="contact" width={400} height={400} />
      </div>
      <Card className="w-full sm:w-[500px]">
        <CardHeader>
          <h2 className="text-lg font-bold">Contacts</h2>
        </CardHeader>
        <CardContent>
          <form action="" className="flex flex-col gap-4">
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="email" />
            <Textarea placeholder="Message" />
            <Button className="bg-green-600 hover:bg-green-700" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
