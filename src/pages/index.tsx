import { About } from "../components/About";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <>
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}
