import Hero from "@/components/hero";
import reliabilityImg from "public/images/reliability.jpg";

export default function Reliability() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="reliability"
      title="A Reliable Partner in an Unreliable World"
    />
  );
}
