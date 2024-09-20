import SignUpform from "@/components/SignUpform";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-evenly p-3 items-center  min-h-dvh">
      <div className="hidden sm:flex">
        <Image
          src={"/farmer-man-planting.svg"}
          alt="image"
          width={400}
          height={400}
        />
      </div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpform />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <span>or</span>
          <form action="">
            <Button
              variant="outline"
              className="border-green-500"
              type="submit"
            >
              Login with Google
            </Button>
          </form>
          <Link href={"/sign-in"}>already have an account?</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
