import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Column - Text */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[600px]">
              <h1 className="mb-5 text-3xl leading-tight font-bold text-black sm:text-4xl md:text-5xl dark:text-white">
                <span className="text-primary inline-block">
                  PPE Safety Wear
                </span>
                , <span className="text-primary inline-block">Printing</span>,{" "}
                <span className="text-primary inline-block">Embroidery</span>, &
                Shop In Mokopane.
              </h1>
              <p className="text-body-color dark:text-body-color-dark mb-8 text-base leading-relaxed sm:text-lg md:text-xl">
                At Maporch we pride ourselves in providing the best quality PPE
                Safety Wear, Printing & Embroidery in Mokopane. In our 4 years
                of business, we have managed to serve over 1000+ happy
                customers. We are here to serve you with the utmost care and
                quality.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link
                  href="https://nextjstemplates.com/templates/saas-starter-startup"
                  className="bg-primary hover:bg-primary/80 rounded-lg px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
                >
                  PPE Safety Wear
                </Link>
                <Link
                  href="https://github.com/NextJSTemplates/startup-nextjs"
                  className="inline-block rounded-lg bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Printing & Embroidery
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image / Blob placeholder */}
          <div className="mt-10 w-full px-4 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto max-w-[400px]">
              {/* Blob SVG */}
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-full"
              >
                <path
                  fill="red" // Changed the blob color to red
                  d="M47.3,-54.2C61.7,-45.7,73.6,-30.2,73.4,-15.3C73.3,-0.3,61.1,14.1,50.1,25.2C39.1,36.3,29.2,44.1,17.1,50.3C5.1,56.5,-9,61.2,-20.2,56.5C-31.4,51.7,-39.7,37.6,-48.3,23.4C-57,9.2,-66.1,-5.2,-65.5,-19.4C-64.9,-33.6,-54.5,-47.6,-41.3,-55.3C-28.1,-62.9,-14.1,-64.2,0.5,-64.8C15.2,-65.5,30.4,-65.1,47.3,-54.2Z"
                  transform="translate(100 100)"
                />
              </svg>
              {/* Image inside the blob */}
              <Image
                src="/images/ppe/2.jpg" // Ensure this path is correct
                alt="Hero Image"
                className="absolute top-0 left-0 h-full w-full object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
