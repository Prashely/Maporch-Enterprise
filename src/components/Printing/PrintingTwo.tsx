import Image from "next/image";

const PrintingTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" id="printing">
      <div className="container">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
          <div className="relative aspect-[5/4] w-full max-w-[400px]">
            <Image
              src="/images/printing/4.png"
              alt="Printing image 1"
              fill
              className="drop-shadow-three rounded-3xl object-cover"
            />
          </div>
          <div className="relative aspect-[5/4] w-full max-w-[400px]">
            <Image
              src="/images/printing/3.png"
              alt="Printing image 2"
              fill
              className="drop-shadow-three rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintingTwo;
