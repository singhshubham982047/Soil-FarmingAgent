import { auth } from "@/auth";
import CropProtection from "@/components/CropProtection";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  return (
    <>
      {session?.user ? (
        <div className="flex justify-center items-center min-h-dvh">
          <CropProtection />
        </div>
      ) : (
        redirect("/sign-in")
      )}
    </>
  );
};

export default page;
