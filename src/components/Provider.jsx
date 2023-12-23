"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";

const Provider = ({ title, datas }) => {
  const [toggleAccord, setToggledAccord] = useState(false);
  const [contextIndex, setContextIndex] = useState();
  const handleToggledAccord = (index) => {
    setToggledAccord(!toggleAccord);
    setContextIndex(index);
  };
  return (
    <section className="flex flex-col items-center text-black justify-center w-full">
      {title && (
        <h2 className="text-center text-[17px] md:text-[30px]">
          {title} <br /> <span className="font-[700] text-black">FAQs</span>
        </h2>
      )}
      <div className="flex flex-col gap-4 w-full">
        {datas.map((data, index) => {
          return (
            <Accordion
              key={index}
              data={data}
              onClick={() => handleToggledAccord(index)}
              active={contextIndex === index && toggleAccord}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Provider;
