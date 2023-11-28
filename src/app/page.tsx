import homeImg from "public/images/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero imgData={homeImg} imgAlt="factory" title="Streamlined Excellence" />
  );
}
