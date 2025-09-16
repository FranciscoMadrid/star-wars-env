import Hero from "@/components/Hero";
import HeroImage from '../../public/bg-deathstar.jpg'
import FilmsContainer from "@/components/FilmsContainer";

export default function Home() {
  return (
    <>
      <Hero 
        image={HeroImage}
        title="Star Wars"
        subtitle="Legendaries Movies"/>
        
        <section 
          id="collection"
          className="w-full bg-gradient-to-b from-background via-gray-900 to-gray-600 h-full">
          <div className="max-w-7xl mx-auto">
            <FilmsContainer/>
          </div>
        </section>
    </>
  );
}
