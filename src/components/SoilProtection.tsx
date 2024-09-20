import soilProtectionData from "@/lib/constants/soilProtection.json";
import { Card, CardContent, CardTitle } from "./ui/card";

const SoilProtection = () => {
  const { soilProtectionTechniques } = soilProtectionData;
  return (
    <div className="flex flex-col justify-center items-center space-y-2 m-10  min-h-dvh ">
      {soilProtectionTechniques.map((technique, index) => (
        <Card className="w-full rounded-sm p-4 space-y-4 " key={index}>
          <CardTitle className="flex items-center text-center justify-center font-mono text-lg bg-green-700 text-white/85 ">
            {technique.technique}
          </CardTitle>
          <CardContent className="space-y-3">
            <p className="text-sm mt-2">{technique.description}</p>
            <h1 className="font-semibold">Benifits:</h1>
            <ul className="list-outside list-disc gap-3 m-6 font-serif">
              {technique.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SoilProtection;
