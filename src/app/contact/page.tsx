import { auth } from "@/auth";
import Contact from "@/components/Contact";

const page = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center m-6 min-h-screen">
      <Contact user={session?.user?.email || ""} />
    </div>
  );
};

export default page;
