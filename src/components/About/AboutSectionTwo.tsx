import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
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
                  FITTING AVAILABLE
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Fitting rooms are available at our store for you to try on
                  different sizes and colors to find the one that suits you
                  best.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="text-primary mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  3-MONTHS LAY-BY
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Get a 3-months lay-by option on all our products. Pay a
                  deposit and we will keep your items safe until you are ready
                  to pay the balance.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="text-primary mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  BUY IN BULK
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  If you are a business owner and you want to get your employees
                  quality work wear, You can buy in bulk.
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
