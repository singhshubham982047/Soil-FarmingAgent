import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Link from "next/link";

const ServiceCard = ({
  src,
  description,
  title,
  link,
}: {
  src: string;
  description: string;
  title: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <Card className="max-w-[350px] min-h-[400px]  rounded-none transition-all hover:shadow-xl ease-in-out duration-300 cursor-pointer">
        <CardContent className="p-0 w-full ">
          <img src={src} className="max-h-[250px] w-[350px] object-cover " />
        </CardContent>
        <CardFooter className="flex flex-col items-center text-center">
          <CardTitle className="text-xl sm:text-2xl font-bold">
            {title}
          </CardTitle>
          <p className="text-[13px] text-muted-foreground">{description}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ServiceCard;
