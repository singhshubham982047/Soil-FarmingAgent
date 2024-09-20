import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",

    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",

    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",

    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",

    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];
const testimonials = [
  {
    name: "John Doe",
    role: "Farmer",
    image: "https://avatar.vercel.sh/jill",
    feedback:
      "Soil-Farming-Agent has transformed my farm's productivity! The recommendations for soil improvement have led to healthier crops and a better yield.",
  },
  {
    name: "Jane Smith",
    role: "Agronomist",
    image: "https://avatar.vercel.sh/jill",
    feedback:
      "The platform is extremely user-friendly, and the information on soil types and suitable crops is spot on. It’s been a game-changer for my consultations.",
  },
  {
    name: "Michael Johnson",
    role: "Seed Distributor",
    image: "https://avatar.vercel.sh/jill",
    feedback:
      "As a seed distributor, the ability to connect with farmers easily has helped my business grow. The platform streamlines the communication process.",
  },
  {
    name: "Emily Davis",
    role: "Organic Farmer",
    image: "https://avatar.vercel.sh/jill",
    feedback:
      "The detailed soil reports and sustainable farming tips have helped me move toward organic farming practices. Highly recommend this platform!",
  },
  {
    name: "Robert Lee",
    role: "Farm Owner",
    image: "https://avatar.vercel.sh/jill",
    feedback:
      "The soil analysis tools are fantastic! I can now make data-driven decisions to ensure I’m planting the right crops for my farm’s soil.",
  },
];

const firstRow = testimonials.slice(0, reviews.length / 2);
const secondRow = testimonials.slice(reviews.length / 2);

const Card = ({
  image,
  name,
  role,
  feedback,
}: {
  image: string;
  name: string;
  role: string;
  feedback: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={image}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{role}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{feedback}</blockquote>
    </figure>
  );
};

const ReviewCard = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <Card key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <Card key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default ReviewCard;
