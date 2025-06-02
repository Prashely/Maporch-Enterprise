import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPE SAFETY WORK WEAR",
  keywords: "PPE SAFETY WORK WEAR, Mokopane",
  description: "This is PPE SAFETY WORK WEAR Page for Maporch Enterprise",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Safety & Work Wear"
        description="Your one stop for quality PPE Safety & work wear in Mokopane."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
