import { auth, signIn } from "@/auth";
import LoginForm from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session?.user) redirect("/");

  return (
    <div className="flex justify-evenly items-center h-dvh p-3  ">
      <div className="hidden sm:flex">
        <Image
          src={"/farmer-man-planting.svg"}
          alt="image"
          width={400}
          height={400}
        />
      </div>

      <Card className="w-96">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <span>or</span>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button
              variant={"outline"}
              type="submit"
              className="border-green-600"
            >
              Login with Google
            </Button>
          </form>
          <Link href={"/sign-up"}>new user? signup</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
