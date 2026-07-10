"use client";

import Image from "next/image";
import React from "react";
import ContactForm from "../forms/ContactForm";
import FixedBottomContactForm from "../forms/FixedBottomContactForm";

function HeroSection() {
  const heroFormRef = React.useRef<HTMLDivElement | null>(null);
  const carouselRef = React.useRef<HTMLDivElement | null>(null);
  const [showFloatingForm, setShowFloatingForm] = React.useState(false);

  React.useEffect(() => {
    const heroFormElement = heroFormRef.current;
    const carouselElement = carouselRef.current;

    if (!heroFormElement || !carouselElement) return;

    let heroFormInView = true;
    let carouselAtTop = false;

    const updateVisibility = () => {
      setShowFloatingForm(carouselAtTop && !heroFormInView);
    };

    const heroFormObserver = new IntersectionObserver(
      ([entry]) => {
        heroFormInView = entry.isIntersecting;
        updateVisibility();
      },
      {
        threshold: 0.2,
      }
    );

    const carouselObserver = new IntersectionObserver(
      ([entry]) => {
        carouselAtTop = entry.boundingClientRect.top <= 0;
        updateVisibility();
      },
      {
        threshold: 0,
      }
    );

    heroFormObserver.observe(heroFormElement);
    carouselObserver.observe(carouselElement);

    return () => {
      heroFormObserver.disconnect();
      carouselObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section className="w-full bg-[var(--dark-blue)] text-white flex flex-col lg:flex-row flex-1 h-full " id="hero" ref={carouselRef}>
        <div className="relative flex flex-col lg:flex-[0.5] justify-end md:flex-[0.6] h-[80vh] lg:h-[95vh] w-full lg:mt-16">
          <Image
            src="/assets/galaxyImages/tempBanner.jpg"
            alt="Building Image"
            fill
            fetchPriority="high"
            sizes="100vw"
            className="md:hidden"
          />
          <Image
            src="/assets/galaxyImages/tempBanner.jpg"
            alt="Building Image"
            fill
            fetchPriority="high"
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="hidden md:block"
          />
          {/* <div className="h-1/2 z-20 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 w-full tracking-none" />
            <h1 className="text-white text-4xl font-normal mb-4 z-30 w-full px-6 text-center lg:text-left lg:px-24 lg:text-[4rem] lg:leading-20 tracking-tighter ">
              Hum Emerald Heights
              <br />
              <span className="font-medium tracking-none">
                Where Everyday Living Feels Elevated
              </span>
            </h1> */}
          <div className="flex justify-center lg:justify-start items-center z-30 px-6 pb-12 lg:pb-4 lg:pb-24 lg:px-24 gap-4 lg:gap-12 lg:mt-0">
            {/* <div className="flex flex-col items-start justify-start">
              <h2 className="text-white text-3xl lg:text-5xl font-medium lg:font-bold">
                15+
              </h2>
              <h3 className="text-md">
                Completed <br />
                Projects
              </h3>
            </div> */}
            {/* <div className="flex flex-col items-start justify-start">
              <h2 className="text-white text-3xl lg:text-5xl font-medium lg:font-bold">
                21+
              </h2>
              <h3 className="text-md">
                Years of <br />
                Experience
              </h3>
            </div> */}
            {/* <div className="size-14 lg:size-20 rounded-full bg-[var(--gold-colour)] flex items-center justify-center">
              <Image
                src="/icons/arrow.svg"
                alt="Arrow Icon"
                width={32}
                height={32}
                className="h-5 w-auto lg:h-8"
              />
            </div> */}
          </div>
        </div>
        <div className=" flex flex-col flex-[0.4] lg:flex-[0.5] items-center my-12 lg:mt-24 lg:mb-0 justify-center w-full">
          <div
            ref={heroFormRef}
            className="relative flex w-[90%] lg:w-[55%] p-12 py-20 lg:py-16 bg-black/30 rounded-3xl shadow-lg"
          >
            <ContactForm />
            <div className="bg-[image:var(--button-gradient-1)] h-12 w-full lg:w-[40%] rounded-t-3xl lg:rounded-tr-none lg:rounded-tl-[2.5em] lg:rounded-br-[2.5em] absolute top-0 left-0 z-20 flex items-center justify-center">
              <p className="text-primary font-medium text-lg">Enquiry Form</p>
            </div>
          </div>
        </div>
      </section>
      <div>
        {/* <AutoScrollingCarousel className="bg-[image:var(--gradient-1)] text-[var(--dark-blue)]" /> */}
      </div>
      <FixedBottomContactForm visible={showFloatingForm} />
    </>
  );
}

export default HeroSection;
