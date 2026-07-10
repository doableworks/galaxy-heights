import React from "react";

const highlightItems = [
  "Vastu Compliant Homes",
  "Rain Water harvesting",
  "prime location",
  "high-tech security",
  "Air-Conditioned Lobby",
  "asian paints with 10 years warranty*",
  "High-speed elevators",
  "Branded vitrified flooring",
];

function HighlightsSection() {
  return (
    <section className="w-full px-6 py-16 lg:px-16" id="highlights">
      <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
        <h2 className="bg-[image:var(--gradient-2)] bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
          Project Highlights
        </h2>
        <h2 className="text-center text-3xl font-bold text-black lg:text-left lg:text-6xl">
          HUM Galaxy Heights
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
        {highlightItems.map((item) => (
          <div key={item} className="flex border-b border-gray-300 pb-6 lg:border-0 lg:pb-0 lg:items-start gap-4">
            <img
              src="/icons/bulletin.svg"
              alt=""
              aria-hidden="true"
              className="mt-1 h-6 w-6 shrink-0 lg:h-8 lg:w-8"
            />
            <p className="text-xl text-primary lg:text-4xl capitalize">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighlightsSection;
