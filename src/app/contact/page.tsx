import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maporch Enterpriise | Contact Page",
  keywords: "Contact Page, Maporch Enterpriise. Printing, Mokopane, Embroidery in Mokopane",
  description: "This is Contact Page for Maporch Enterpriise",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get In Touch "
        description="iF you have any questions, please do not hesitate to contact us. We will get back to you as soon as possible. Otherwise you can visit our shop."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
