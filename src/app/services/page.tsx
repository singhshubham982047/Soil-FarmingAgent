import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Soil Details",
    src: "/soil-protect.svg",
    link: "/services/soil-details",
    description:
      "Protecting the soil from erosion and degradation is crucial for maintaining soil health and fertility.",
  },
  {
    title: "Crop Protection",
    src: "/crop-protection.svg",
    link: "/services/crop-protection",
    description:
      "Protecting crops from pests, diseases, and environmental stresses is essential for ensuring food security.",
  },
  {
    title: "Seed Distribution",
    src: "/seed-distribution.svg",
    link: "/services/seed-distribution",
    description:
      "Distributing high-quality seeds to farmers is critical for promoting crop diversity and improving agricultural production.",
  },
];

const page = () => {
  return (
    <div className="m-6 mt-16 md:mt-0 p-6 flex flex-col md:flex-row gap-4 items-center justify-center min-h-dvh ">
      {services.map((service, index) => (
        <ServiceCard
          key={index + 1}
          title={service.title}
          src={service.src}
          link={service.link}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default page;
