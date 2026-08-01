"use client";

import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { galleryImages } from "@/lib/constants/staticStats";

function GallerySection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [plugins] = React.useState(() => [
    Fade(),
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  React.useEffect(() => {
    if (!api) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    updateSelectedIndex();
    api.on("select", updateSelectedIndex);
    api.on("reInit", updateSelectedIndex);

    return () => {
      api.off("select", updateSelectedIndex);
      api.off("reInit", updateSelectedIndex);
    };
  }, [api]);

  return (
    <section className="w-full py-16 lg:pl-16" id="gallery">
      <div className="flex flex-col items-center justify-center gap-4 px-6 lg:items-start lg:px-0 lg:pr-16">
        <h2 className="bg-[image:var(--gradient-2)] bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
          Project Gallery
        </h2>
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between">
          <h2 className="text-center text-3xl font-bold text-black lg:text-left lg:text-6xl">
            HUM Galaxy Heights
          </h2>
          {/* <button className="flex items-center justify-center bg-[image:var(--button-gradient-2)] px-4 py-2 font-bold text-white">
            View Gallery
          </button> */}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6 px-6 lg:px-0 lg:pr-16">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          plugins={plugins}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {galleryImages.map((image) => (
              <CarouselItem key={image.src} className="pl-0">
                <div className="relative aspect-video max-h-[85vh] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 80vw, 80vw"
                    className="object-cover"
                    priority={image.src === galleryImages[0].src}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex items-center justify-center gap-3 min-h-5">
          {galleryImages.map((image, index) => {
            const isActive = index === selectedIndex;

            return (
              <button
                key={image.src}
                type="button"
                aria-label={`Go to gallery image ${index + 1}`}
                aria-pressed={isActive}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-300 ${
                  isActive
                    ? "h-5 w-2 rounded-full bg-neutral-400"
                    : "h-3 w-3 rounded-full bg-neutral-300"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
