import Hero from "@/components/hero";
import scaleImg from "public/images/scale.jpg";

export default function Scale() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="scale"
      title="Leveraging Economies of Scale"
    />
  );
}
