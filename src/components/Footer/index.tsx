"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const contactDetails = [
    {
      id: 1,
      href: "tel:0150042852",
      text: "015 004 2852/56",
      icon: "/images/t.svg",
    },
    {
      id: 2,
      href: "https://wa.me/message/SOWC6MH4DARXP1",
      text: "066 138 6214",
      icon: "/images/wa.svg",
    },
    {
      id: 3,
      href: "mailto:sales@maporch.co.za",
      text: "sales@maporch.co.za",
      icon: "/images/em.svg",
    },
    {
      id: 4,
      href: "https://www.facebook.com/people/Maporch-Enterprise/61573398093426/",
      text: "Maporch Enterprise ",
      icon: "/images/fa.svg",
    },
  ];

  return (
    <>
      <footer className="relative z-10 bg-red-50 pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-between">
            {/* Logo and Description */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-2 inline-block">
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="w-full"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="hidden w-full"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="text-body-color mb-2 leading-relaxed text-black">
                  Your one stop for quality PPE Safety Wear, Printing &
                  Embroidery.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 px-4 md:w-1/2 lg:w-1/4">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-2 text-xl font-bold text-black">
                  Quick Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/ppe-safety-wear"
                      className="hover:text-primary mb-1 inline-block text-black duration-300"
                    >
                      PPE Safety Wear
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-primary mb-1 inline-block text-black duration-300"
                    >
                      Printing & Embroidery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-primary mb-1 inline-block text-black duration-300"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-wrap gap-1 px-4 md:w-1/2 lg:w-1/4">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-2 text-xl font-bold text-black">
                  Contact Us
                </h2>
                <div className="flex flex-col space-y-2">
                  {contactDetails.map((contact) => (
                    <div
                      key={contact.id}
                      className="flex items-center space-x-1"
                    >
                      <Image
                        src={contact.icon}
                        width={20}
                        height={20}
                        alt={contact.text}
                      />
                      <Link
                        href={contact.href}
                        className="hover:text-primary text-black"
                      >
                        {contact.text}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent"></div>
          <div className="py-8">
            <p className="text-body-color text-center text-black">
              Maporch Enterprise © 2025 All Rights Reserved
            </p>
            <p className="text-center text-sm text-gray-500">
              credits to{" "}
              <a
                href="https://prashely.com"
                className="text-black underline underline-offset-2"
              >
                Prashely
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
