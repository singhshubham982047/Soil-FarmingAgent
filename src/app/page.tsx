import AnimatedImage from "@/components/AnimateImage";
import AppearOnScroll from "@/components/AppearOnScroll";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import ReviewCard from "@/components/ReviewCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <AppearOnScroll delay={0.5}>
        <Hero />
      </AppearOnScroll>
      <AppearOnScroll delay={0.9}>
        <section id="services">
          <div className="container  mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 2xl:p-32 space-y-3 ">
            <AppearOnScroll>
              <section id="precision-farming">
                <div className="flex flex-col-reverse sm:flex-row sm:gap-3  justify-center items-center">
                  <div className="flex flex-col w-full justify-center text-center sm:text-left gap-4 ">
                    <h2
                      className="text-3xl font-bold text-gray-900 dark:text-white mb
            -4"
                    >
                      Precision Farming
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400">
                      Precision farming is a farming practice that uses advanced
                      technologies, such as drones, satellite imaging, and
                      sensors, to optimize crop yields, reduce waste, and
                      improve resource efficiency.
                    </p>
                  </div>

                  <div className="w-full flex justify-center items-center ">
                    <AnimatedImage
                      src={"/spring-farm.svg"}
                      alt="precision-image"
                    />
                  </div>
                </div>
              </section>
            </AppearOnScroll>
            <AppearOnScroll delay={1.3}>
              <section id="efficient-distribution">
                <div className="flex flex-col sm:gap-3 sm:flex-row justify-center items-center ">
                  <div className="w-full flex justify-center items-center">
                    <AnimatedImage
                      src={"/sustainable-practice.svg"}
                      alt="precision-image"
                    />
                  </div>
                  <div className="flex flex-col w-full justify-center  gap-4 text-center sm:text-right ">
                    <h2
                      className="text-3xl font-bold text-gray-900 dark:text-white mb
            -4"
                    >
                      Sustainable Practices
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sustainable practices are essential for maintaining the
                      health of our planet. By adopting sustainable practices,
                      farmers can reduce their environmental impact, conserve
                      resources, and promote biodiversity.
                    </p>
                  </div>
                </div>
              </section>
            </AppearOnScroll>
            <AppearOnScroll delay={1.7}>
              <section id="efficient-distribution">
                <div className="flex flex-col-reverse sm:gap-3 sm:flex-row ">
                  <div className="flex flex-col w-full justify-center  gap-4 text-center sm:text-left ">
                    <h2
                      className="text-3xl font-bold text-gray-900 dark:text-white mb
            -4"
                    >
                      Efficient Distribution
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Streamline your supply chain and deliver seeds to
                      customers with ease.
                    </p>
                  </div>

                  <div className="w-full flex justify-center items-center">
                    <AnimatedImage
                      src={"/distribution.svg"}
                      alt="distribution"
                    />
                  </div>
                </div>
              </section>
            </AppearOnScroll>
          </div>
        </section>
      </AppearOnScroll>
      <AppearOnScroll delay={1}>
        <Banner />
      </AppearOnScroll>
      <AppearOnScroll delay={1}>
        <section id="testimonial">
          <div
            className="container mx-auto p-4 pt-6 md:p-6 lg:p
        -12 xl:p-24 2xl:p-32"
          >
            <h2 className="text-3xl text-center font-bold text-gray-900 dark:text-white mb-4">
              Testimonials
            </h2>
            <ReviewCard />
          </div>
        </section>
      </AppearOnScroll>
    </main>
  );
}
