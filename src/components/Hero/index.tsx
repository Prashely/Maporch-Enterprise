import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
    >
      {/* Background Image for Mobile */}
      <div className="absolute inset-0 -z-10 block lg:hidden">
        <Image
          src="/images/ppe/2.jpg" // Ensure this path is correct
          alt="Hero Background"
          className="h-full w-full object-cover"
          fill
        />
      </div>

      <div className="container">
        <div className="flex flex-wrap-reverse items-center lg:flex-nowrap">
          {/* Left Column - Hero Text */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[600px] text-center lg:text-left">
              <h1 className="mt-40 mb-5 text-3xl leading-tight font-bold text-black sm:text-4xl md:text-5xl dark:text-white">
                <span className="text-primary inline-block">
                  PPE Safety Wear
                </span>
                , <span className="text-primary inline-block">Printing</span>,{" "}
                <span className="text-primary inline-block">Embroidery</span>, &
                <span className="sm:text-white md:text-black">
                  Shop In Mokopane.
                </span>
              </h1>
              <p className="text-body-color dark:text-body-color-dark mb-8 hidden text-base leading-relaxed sm:text-lg md:text-xl lg:block">
                At Maporch we pride ourselves in providing the best quality PPE
                Safety Wear, Printing & Embroidery in Mokopane. In our 4 years
                of business, we have managed to serve over 1000+ happy
                customers. We are here to serve you with the utmost care and
                quality.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link
                  href="/services#printing"
                  className="bg-primary hover:bg-primary/80 rounded-lg px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
                >
                  PPE Safety Wear
                </Link>
                <Link
                  href="/services"
                  className="inline-block rounded-lg bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Printing & Embroidery
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image for Larger Screens */}
          <div className="hidden w-full px-4 lg:mt-0 lg:block lg:w-1/2">
            <Image
              src="/images/ppe/2.jpg" // Ensure this path is correct
              alt="Hero Image"
              className="rounded-3xl object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
