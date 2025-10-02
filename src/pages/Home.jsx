import Featured from "../components/home/Featured";
import HomeSection from "../components/home/HomeSection";
import Property from "../components/home/Property";
import { categories, Whychoose } from "../components/Data";

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
