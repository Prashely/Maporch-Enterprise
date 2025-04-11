"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-gray-dark relative z-10 bg-red-50 pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex justify-between">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-2 inline-block">
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="text-body-color dark:text-body-color-dark mb-2 text-base leading-relaxed">
                  Yout one stop for quality PPE Safety Wear, Printing &
                  Embroidery.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/people/Maporch-Enterprise/61573398093426/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mr-6 duration-300"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="mailto:designer@maporch.co.za"
                    aria-label="Email"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mr-6 duration-300"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="tel:+27661386214"
                    aria-label="Phone"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mr-6 duration-300"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 16.92V21C22 21.55 21.55 22 21 22C10.5072 22 2 13.4928 2 3C2 2.45 2.45 2 3 2H7.09C7.58 2 7.98 2.36 8.05 2.85C8.21 3.94 8.54 5 9.02 6.01C9.2 6.38 9.09 6.83 8.77 7.09L6.62 8.82C8.06 11.91 10.59 14.44 13.68 15.88L15.41 13.73C15.67 13.41 16.12 13.3 16.49 13.48C17.5 13.96 18.56 14.29 19.65 14.45C20.14 14.52 20.5 14.92 20.5 15.41V16.92C20.5 17.47 20.95 17.92 21.5 17.92H22Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://g.co/kgs/8UnKxZC"
                    aria-label="Google Maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mr-6 duration-300"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10C21 16 12 22 12 22C12 22 3 16 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 px-4">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                  Contact
                </h2>
                <ul>
                  <li>
                    <Link
                      href="mailto:designer@maporch.co.za"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-1 inline-block text-base duration-300"
                    >
                      designer@maporch.co.za
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+27150042852"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-1 inline-block text-base duration-300"
                    >
                      015 004 2852/56
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+27661386214"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-1 inline-block text-base duration-300"
                    >
                      066 138 6214
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                  Quick Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="mailto:designer@maporch.co.za"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-1 inline-block text-base duration-300"
                    >
                      PPE Safety Wear
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+27150042852"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-1 inline-block text-base duration-300"
                    >
                      Printing & Embroidery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+27661386214"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-1 inline-block text-base duration-300"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-body-color text-center text-base dark:text-white">
              Maporch Enterprise © 2025 All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
