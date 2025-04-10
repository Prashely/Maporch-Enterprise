"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

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
