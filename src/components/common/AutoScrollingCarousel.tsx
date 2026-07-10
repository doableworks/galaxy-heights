"use client";

import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const carouselItems = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  text: "a vision for liveable and affordable homes.",
}));

interface AutoScrollingCarouselProps {
  className?: string;
}

function AutoScrollingCarousel({ className }: AutoScrollingCarouselProps) {
  const autoScroll = React.useRef(
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      speed: 1.5,
    })
  );

  return (
    <Carousel
      className={className}
      opts={{
        align: "start",
        dragFree: true,
        loop: true,
      }}
      plugins={[autoScroll.current]}
    >
      <CarouselContent className="-ml-0">
        {carouselItems.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-auto pl-0 py-4"
          >
            <div className="flex items-center gap-4 whitespace-nowrap pr-4 text-sm font-medium tracking-tight text-white/90 lg:text-lg">
              {/* <span
                className="text-xl leading-none text-[var(--dark-blue)]"
                aria-hidden="true"
              >
                ⏺
              </span> */}
              <span className="text-[var(--dark-blue)] capitalize font-bold">{item.text}</span>
              <span
                className="text-xl leading-none text-[var(--dark-blue)]"
                aria-hidden="true"
              >
                ⏺
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default AutoScrollingCarousel;
