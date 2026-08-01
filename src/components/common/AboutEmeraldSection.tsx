import React from "react";

function AboutEmeraldSection() {
  return (
    <section className="w-full py-12" id="overview">
      <div className="flex flex-col items-center lg:items-start justify-center gap-4 px-6 text-center lg:px-24">
        <h2 className="bg-[image:var(--gradient-2)] bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
          About HUM Galaxy Heights
        </h2>
        <h3 className="text-3xl font-bold text-black lg:text-6xl">
          The Epitome of Refined Living
        </h3>
      </div>

      <div className="mx-auto mt-8 flex flex-col gap-6 px-6 text-center lg:mt-10 lg:gap-8 lg:px-24 lg:text-left">
        <p className="text-lg leading-8 text-neutral-800 lg:text-xl lg:leading-9">
          Step into a World of Elegance and Sophistication at HUM Galaxy Heights – A G+19 Storey Landmark Tower by HUM Developers. Thoughtfully Crafted Residences, Exceptional Connectivity, and Curated Lifestyle Amenities come together to redefine contemporary urban living. An address that truly reflects your aspirations, where Luxury, Comfort, and Convenience blend seamlessly every single day.
        </p>
      </div>
    </section>
  );
}

export default AboutEmeraldSection;
