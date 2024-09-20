import Distributer from "@/components/Distributer";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  return (
    <>
      {session?.user ? (
        <div className="flex flex-col justify-center items-center m-10 min-h-dvh">
          <div className=" text-center">
            <h1 className="text-xl font-semibold">Seed Distribution</h1>
            <p className="text-muted-foreground">
              Efficient and reliable seed distribution services.
            </p>
          </div>
          <Distributer />
        </div>
      ) : (
        redirect("/sign-in")
      )}
    </>
  );
};

export default page;
