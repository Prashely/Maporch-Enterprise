import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPE SAFETY WORK WEAR",
  keywords: "PPE SAFETY WORK WEAR, Mokopane",
  description: "This is PPE SAFETY WORK WEAR Page for Maporch Enterpriise",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Your one stop for quality PPE Safety Wear, Printing & Embroidery in Mokopane."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
