import { auth } from "@/auth";
import SoilAndDistributerForm from "@/components/SoilAndDistributerForm";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "ADMIN") {
    return redirect("/sign-in");
  }

  return (
    <>
      <SoilAndDistributerForm />
    </>
  );
};

export default page;
