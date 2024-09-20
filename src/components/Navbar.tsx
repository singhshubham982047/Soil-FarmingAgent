import { auth, signOut } from "@/auth";
import { Avatar } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify, CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { redirect } from "next/navigation";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="flex justify-between items-center  h-[70px] fixed top-0 left-0 right-0 bg-black/80 text-white/75 z-50 p-2">
      <Link href={"/"} className="p-2">
        <Image src={"/soil-logo.png"} alt="logo" width={70} height={70} />
      </Link>

      <div className="hidden md:flex flex-row justify-between items-center  text-center  ">
        <Link href={"/"} className="link">
          Home
        </Link>
        <Link href={"/services"} className="link">
          Services
        </Link>
        <Link href={"/about"} className=" link">
          About
        </Link>
        <Link href={"/contact"} className=" link">
          Contact
        </Link>
      </div>

      <div className="flex justify-center items-center mr-3">
        <div className="hidden md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8 items-center justify-center">
                  <CircleUserRound />
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <div className="flex items-center gap-2 p-2">
                <div className="grid gap-0.5 leading-none">
                  {session?.user && (
                    <>
                      <div className="font-semibold">{session.user.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {session.user.email}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <DropdownMenuSeparator />

              {session?.user ? (
                <form
                  className="flex flex-col"
                  action={async () => {
                    "use server";
                    await signOut();
                    redirect("/");
                  }}
                >
                  <DropdownMenuItem className="cursor-pointer ">
                    <button
                      type="submit"
                      className="hidden md:flex  font-semibold  "
                    >
                      Sign Out
                    </button>
                  </DropdownMenuItem>
                </form>
              ) : (
                <DropdownMenuItem className="cursor-pointer ">
                  <Link
                    href={"/sign-in"}
                    className="hidden md:flex  font-semibold  "
                  >
                    Login
                  </Link>
                </DropdownMenuItem>
              )}
              {session?.user.role === "ADMIN" && (
                <DropdownMenuItem className="cursor-pointer ">
                  <Link className="font-hidden" href={"/admin/dashboard"}>
                    Dashboard
                  </Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Sheet>
          <SheetTrigger>
            <AlignJustify className="md:hidden" />
          </SheetTrigger>
          <SheetContent className="flex flex-col text-xl font-medium text-green-600 justify-center items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>

            {session?.user ? (
              <div className="flex flex-col gap-2 justify-center items-center">
                {session.user.role === "ADMIN" && (
                  <Link href={"/admin/dashboard"}>Dashboard</Link>
                )}
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                    redirect("/");
                  }}
                >
                  <button type="submit">SignOut</button>
                </form>
              </div>
            ) : (
              <Link href={"/sign-in"}>Login</Link>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
