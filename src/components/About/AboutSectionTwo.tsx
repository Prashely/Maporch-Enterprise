import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" id="printing">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/ppe/3.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="text-primary mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Printing
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Whether you are looking for logo printing on your uniform,
                  brand or rebrand your shop or even your vehicle, we have you
                  covered. We also have experienced graphic designers who can
                  help you with your design needs.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="text-primary mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Embroidery
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  We offer high quality embroidery services for all your work
                  wear, corporate wear and promotional items. We have a wide
                  range of embroidery threads and fabrics to choose from.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="text-primary mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  InstallaTion
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  After completing your designs we have a team of applicators
                  ready to brand your shop, vehicle or any other item you need
                  branded. We also install your signage and branding on site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
