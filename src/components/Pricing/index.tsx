"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Image from "next/image";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Services & Products"
          paragraph="For pricing and qoutes please contact us."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Printing & Embrodiery"
            price=""
            duration={isMonthly ? "mo" : "yr"}
            subtitle="For prices please contact us"
          >
            <OfferList text="Signage boards" status="active" />
            <OfferList text="Vehicle Branding" status="active" />
            <OfferList text="Wall Banners" status="active" />
            <OfferList text="Pull-Up Banner" status="active" />
            <OfferList text="Shop Branding" status="active" />
            <OfferList text="Fleet Stickers" status="active" />
            <OfferList text="Name Tags" status="active" />
            <OfferList text="Diaries" status="active" />
            <OfferList text="Gazebos" status="active" />
            <OfferList text="Graphic Design" status="active" />
            <OfferList text="Safety Signs" status="active" />
            <OfferList text="And more..." status="active" />
          </PricingBox>
          <PricingBox
            packageName="PPE Safety Work Wear"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="For prices please contact us."
          >
            <OfferList text="Helmets" status="active" />
            <OfferList text="Overalls" status="active" />
            <OfferList text="Gumboots" status="active" />
            <OfferList text="Footwear" status="active" />
            <OfferList text="Safety Belts" status="active" />
            <OfferList text="Lab Coats" status="active" />
            <OfferList text="Housekeeping Uniform" status="active" />
            <OfferList text="Rain Coats" status="active" />
            <OfferList text="Reflective Wear" status="active" />
            <OfferList text="Gloves" status="active" />
            <OfferList text="Safety Signs" status="active" />
            <OfferList text="And more..." status="active" />
          </PricingBox>
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

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
