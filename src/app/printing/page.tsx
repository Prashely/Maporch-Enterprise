import PrintingOne from "@/components/Printing/PrintingOne";
import PrintingTwo from "@/components/Printing/PrintingTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPE SAFETY WORK WEAR",
  keywords: "PPE SAFETY WORK WEAR, Mokopane",
  description: "This is PPE SAFETY WORK WEAR Page for Maporch Enterprise",
  // other metadata
};

const PrintingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Printing & Embroidery"
        description="Your one stop for quality Printing & Embroidery in Mokopane."
      />
      <PrintingOne />
      <PrintingTwo />
    </>
  );
};

export default PrintingPage;
