import cropProtectionData from "@/lib/constants/cropProtection.json";
import { Card, CardContent, CardTitle } from "./ui/card";

const CropProtection = () => {
  const { cropProtection } = cropProtectionData;
  return (
    <div className="flex flex-col justify-center items-center space-y-2 m-10  min-h-dvh ">
      {cropProtection.techniques.map((technique, index) => (
        <Card className="w-full rounded-sm p-4 space-y-4 mt-20 " key={index}>
          <CardTitle className="flex items-center text-center justify-center font-mono text-lg bg-green-700 text-white/85 ">
            {technique.type}
          </CardTitle>
          <CardContent className="space-y-3">
            <p className="text-sm mt-2">{technique.description}</p>
            {technique.components && (
              <>
                <h2 className="text-lg font-bold">Key Components:</h2>
                <ul className="list-outside list-disc gap-3 m-6 font-serif">
                  {technique.components?.map((component, index) => (
                    <li key={index}>{component}</li>
                  ))}
                </ul>
              </>
            )}
            {technique.examples && (
              <>
                <h2 className="text-lg font-bold">Examples:</h2>
                <ul className="list-outside list-disc gap-3 m-6 font-serif">
                  {technique.examples?.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </>
            )}
            <h1 className="text-lg font-semibold">Benifits:</h1>
            <ul className="list-outside list-disc gap-3 m-6 font-serif">
              {technique.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <h1 className="text-lg font-semibold">Concern:</h1>
            <ul className="list-outside list-disc gap-3 m-6 font-serif">
              {technique.concerns.map((concern, index) => (
                <li key={index}>{concern}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CropProtection;
