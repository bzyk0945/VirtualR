import React from "react";
import { CheckCircle2 } from "lucide-react";

import { pricingOptions } from "../constants/index";

export const Pircing: React.FC = () => {
  return (
    <section className="mt-20">
      <h2 className="text-center lg:text-6xl my-8 tracking-wide">Pircing</h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border rounded-xl border-neutral-700">
              <h5 className="text-4xl mb-8">
                {item.title}{" "}
                {item.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </h5>
              <p className="mb-8">
                <span className="text-5xl mt-6">{item.price}</span>
                <span className="text-neutral-400 tracking-tight"> /Month</span>
              </p>
              <ul>
                {item.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href=""
                className="flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl border border-orange-900  rounded-lg hover:bg-orange-900 transistion-colors duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
