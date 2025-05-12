import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      title: "Telephone",
      href: "tel:0150042852",
      text: "015 004 2852/56",
      icon: "/images/t.svg",
    },
    {
      id: 2,
      title: "WhatsApp",
      href: "https://wa.me/message/SOWC6MH4DARXP1",
      text: "066 138 6214",
      icon: "/images/wa.svg",
    },
    {
      id: 3,
      title: "Email",
      href: "mailto:sales@maporch.co.za",
      text: "sales@maporch.co.za",
      icon: "/images/em.svg",
    },
  ];

  return (
    <section
      id="contact"
      className="flex items-center justify-center overflow-hidden py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Contact Form */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-black">
                Need Help?
              </h2>
              <p className="text-body-color mb-12 text-base font-medium">
                Reach out and we will do our best to assist you.
              </p>
              <div className="flex flex-col space-y-6">
                {contactDetails.map((contact) => (
                  <div key={contact.id} className="flex items-center space-x-4">
                    <Image
                      src={contact.icon}
                      width={32}
                      height={32}
                      alt={contact.title}
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-black">
                        {contact.title}
                      </h4>
                      <Link
                        href={contact.href}
                        className="text-body-color hover:text-primary text-base"
                      >
                        {contact.text}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-10 w-full px-4 lg:mt-0 lg:w-1/2">
            <div className="h-full overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=Maporch%20Enterprise&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="min-h-[400px] w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
