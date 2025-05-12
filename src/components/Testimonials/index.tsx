import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Malesela Mokoka",
    designation: "Founder @KSMM",
    content:
      "Very impressed with their services and qulity of work. They are very professional and always deliver on time.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Joanas Senoamadi",
    designation: "Founder @EcoXSuitors",
    content:
      "My previous designer was not able to deliver the quality I was looking for. I am so glad I found this team.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Prashely Maluleke",
    designation: "Designer @MaPorch",
    content:
      "The quality of their PPE is top notch. Team is friendly and always willing to help, great vibes all around.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-primary/80 relative z-10 py-4 md:py-8 lg:py-14">
      <div className="container">
        <SectionTitle
          title="What Our Customer Say?"
          paragraph="Each and everyone of them is fully satisfied with our service."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
