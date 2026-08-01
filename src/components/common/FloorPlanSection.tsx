import FloorPlanCard from "@/components/common/FloorPlanCard";
import { floorPlanCards } from "@/lib/constants/staticStats";

function FloorPlanSection() {
  const isFewCards = floorPlanCards.length < 3;

  return (
    <section className="w-full px-6 pb-16 lg:px-16" id="floor-plan">
      <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
        <h2 className="bg-[image:var(--gradient-2)] bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
          Floor Plans & Isometric View
        </h2>
        <h2 className="text-center text-3xl font-bold text-black lg:text-left lg:text-6xl">
          Perfectly Configured Homes
        </h2>
        <div className="flex flex-col items-center gap-8 pt-4 text-center lg:items-start lg:text-left">
          <p className="text-xl lg:text-2xl">
          At HUM, Galaxy Heights, each Residence with precision to offer Spacious Interiors and Seamless Movement. Built with Vastu Complaint Planning, your home is aligned for both Comfort and Well-Being.
          </p>
        </div>
      </div>

      {isFewCards ? (
        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-12">
          {floorPlanCards.map((card) => (
            <div key={card.id} className="w-full lg:w-[400px]">
              <FloorPlanCard title={card.title} imageUrl={card.imageUrl} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-3">
          {floorPlanCards.map((card) => (
            <FloorPlanCard key={card.id} title={card.title} imageUrl={card.imageUrl} />
          ))}
        </div>
      )}
    </section>
  );
}

export default FloorPlanSection;
