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
          <div className="mx-auto max-w-[400px]">
            <Image
              src="/images/ppe/1.jpg" // Ensure this path is correct
              alt="Hero Image"
              className="top-0 left-0 h-full w-full rounded-4xl border-4 object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
