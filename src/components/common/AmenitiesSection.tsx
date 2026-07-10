"use client";

import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { amenitiesItems } from "@/lib/constants/staticStats";

function AmenitiesSection() {
  const autoScroll = React.useRef(
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      speed: 1.5,
    })
  );

  return (
    <section className="w-full py-12 lg:pl-16" id="amenities">
      <div className="flex flex-col items-center justify-center gap-4 px-6 lg:items-start lg:pr-16 lg:px-0">
        <h2 className="bg-[image:var(--gradient-2)] bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
          Amenities
        </h2>
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between">
          <h2 className="text-center text-3xl font-bold text-black lg:text-left lg:text-6xl">
            Live a life of unmatched <br /> comfort at HUM
          </h2>
            {/* <button className="flex items-center justify-center bg-[image:var(--button-gradient-2)] px-4 py-2 font-bold text-white">
              View Projects
            </button> */}
        </div>
      </div>
      <Carousel
        className="mt-10 w-full"
        opts={{
          dragFree: true,
          loop: true,
        }}
        plugins={[autoScroll.current]}
      >
        <CarouselContent className="-ml-0">
          {amenitiesItems.map((item) => (
            <CarouselItem
              key={`${item.title}-${item.imageUrl}`}
              className="basis-full pl-0 pr-6 md:basis-[75%] lg:basis-1/3"
            >
              <div className="flex flex-col gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-[40vh] lg:h-[50vh] w-full object-cover aspect-square"
                />
                <p className="text-xl font-light text-[var(--dark-blue)] lg:text-3xl">
                  {item.title}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default AmenitiesSection;
