import Hero from "@/components/hero";
import perfImage from "public/images/performance.jpg";

export default function Performance() {
  return (
    <Hero
      imgData={perfImage}
      imgAlt="welding"
      title="Efficiency Driving Results"
    />
  );
}
