import Hero from "@/components/home/Hero";
import Collections from "@/components/home/Collections";
import Featured from "@/components/home/Featured";
import Showrooms from "@/components/home/Showrooms";
import ContactPreview from "@/components/home/ContactPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <Featured />
      <Showrooms />
      <ContactPreview />
    </>
  );
}
