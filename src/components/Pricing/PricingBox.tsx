const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  return (
    <div className="w-full">
      <div className="shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-xs bg-white px-8 py-10">
        <div className="flex items-center justify-between">
          <h4 className="text-dark mb-2 text-center text-xl font-bold dark:text-white">
            {packageName}
          </h4>
        </div>
        <div className="border-body-color/10 mb-8 border-b pb-8 dark:border-white/10">
          <a
            href="https://wa.me/message/SOWC6MH4DARXP1"
            className="bg-primary/80 hover:shadow-signUp flex w-full items-center justify-center rounded-xs p-3 text-base font-semibold text-white transition duration-300 ease-in-out"
          >
            Request Pricings
          </a>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PricingBox;
