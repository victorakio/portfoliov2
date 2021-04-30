import { About } from "../components/About";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <ContactForm />
    </>
  );
}
