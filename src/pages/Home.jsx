import Featured from "/src/components/home/Featured";
import HomeSection from "/src/components/home/HomeSection";
import Property from "/src/components/home/Property";
import { categories, Whychoose } from "/src/components/Data";

export default function Home() {
  return (
    <div className="cairo-font text-primary">
      <HomeSection />
      <Property categories={categories} />
      <Featured />
      <Property categories={Whychoose} />
    </div>
  );
}
