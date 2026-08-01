import React from "react";
import { aboutStats } from "@/lib/constants/staticStats";

function AboutSection() {
  return (
    <section className="w-full py-12" id="about-us">
      <div className="flex flex-col items-center justify-center gap-4 px-6 lg:items-start lg:px-24">
        <h2 className="bg-[image:var(--gradient-2)] bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
          About HUM Developers
        </h2>
        <h2 className="text-center text-3xl font-bold text-black lg:text-left lg:text-6xl">
          Transforming Spaces, Enriching Lives
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-2 lg:gap-16 lg:py-12">
        <div className="relative flex aspect-square w-full flex-col gap-4 px-6 lg:col-span-1 lg:h-full lg:aspect-auto lg:pl-0">
          <img
            src={"/assets/ogImage.png"}
            alt="Office Image"
            className="w-full h-full object-cover object_left"
          />
        </div>
        <div className="flex flex-col items-center justify-start gap-6 px-6 pb-2 text-center lg:col-span-1 lg:items-start lg:text-left">
          <h2 className="mb-4 whitespace-nowrap text-3xl font-light capitalize lg:-mt-4 lg:text-6xl lg:leading-20">
            Crafted Spaces<br />
            Refined Living
          </h2>
          <p className="text-lg lg:w-[80%]">
            For over Two Decades, we have evolved from a Boutique Developer to one of the trusted  names in Real Estate, with our portfolio spanning Residential, Commercial, and Mixed-used developments.
          </p>
          <p className="mb-6 text-lg lg:w-[80%]">
            Our Commitment to Architectural Excellence, Sustainable Practices, & Customer Centric Approach has earned us the trust of over 2000 Happy Families and Recognition from Industry Peers.
                      </p>
          {/* <img
            src={"/assets/logo.svg"}
            alt="Office Image"
            className="w-auto h-24"
          /> */}
          {/* <div className="mt-4 flex size-20 items-center justify-center rounded-full border-2 border-[var(--gold-colour)] lg:size-24 lg:border-4">
            <img
              src="/icons/arrowBottom.svg"
              alt="Arrow Icon"
              className="h-5 w-auto lg:h-8"
            />
          </div> */}
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row lg:flex-wrap items-center lg:items-start justify-center lg:justify-between gap-12 lg:gap-8 px-6 pt-12 lg:max-w-7xl lg:mx-auto">
        {aboutStats.map((item) => (
          <div
            key={item.iconUrl}
            className="flex flex-col items-center gap-4 justify-center lg:min-w-[120px]"
          >
            <div
              className="flex size-32 lg:size-32 shrink-0 items-center justify-center rounded-full lg:size-20"
              style={{ backgroundColor: `var(${item.colour})` }}
            >
              <img
                src={item.iconUrl}
                alt={item.subtext}
                className="h-12 w-auto lg:h-14"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-3xl font-semibold text-black lg:text-4xl">
                {item.stat}
              </h3>
              <p className="text-md text-neutral-700 lg:text-base">
                {item.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
