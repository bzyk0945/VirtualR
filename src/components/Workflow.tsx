import React from "react";
import { checklistItems } from "../constants";
import codeImg from "../assets/code.jpg";
import { CheckCircle } from "lucide-react";
export const Workflow: React.FC = () => {
  return (
    <section className="mt-20">
      <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="flex justify-center flex-wrap mt-8">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 p-2 bg-neutral-900 rounded-full h-10 w-10 justify-center items-center">
                <CheckCircle />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
