import React from "react";
import { connectivityItems } from "@/lib/constants/staticStats";

function ConnectivitySection() {
  return (
    <section className="w-full px-6 py-12 lg:px-16" id="connectivity">
      <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
        <h2 className="bg-[image:var(--gradient-2)] bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
          Effortless Connectivity at HUM Galaxy Heights
        </h2>
        <h2 className="text-center text-3xl font-bold text-black lg:text-left lg:text-6xl">
          Stay close to metro, schools, hospitals, and everything the city has to offer.
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {connectivityItems.map((item, index) => (
          <div
            key={item.iconUrl}
            className="flex min-h-[200px] flex-col items-center justify-between p-8 lg:min-h-[250px] lg:p-10"
            style={{
              backgroundImage:
                index % 2 === 0
                  ? "var(--card-gradient-1)"
                  : "var(--card-gradient-2)",
            }}
          >
              <img
                src={item.iconUrl}
                alt={item.title}
                className="h-18 w-auto"
              />

            <div className="mt-8 flex flex-col items-center gap-3">
              <h3 className="text-2xl font-semibold text-[var(--dark-blue)] lg:text-3xl text-center">
                {item.title}
              </h3>
              <p className="text-base font-medium text-black/70 lg:text-lg">
                {item.distance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConnectivitySection;
