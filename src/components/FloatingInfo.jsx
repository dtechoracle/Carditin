import Image from "next/image";
import React from "react";

const FloatingInfo = ({
  price,
  title,
  src,
  className,
  alt,
  width,
  height,
  imageClass,
}) => {
  return (
    <div
      style={{
        borderRadius: "12px",
        border: "1px solid #FFF",
        background: "rgba(255, 255, 255, 0.70)",
        backdropFilter: "blur(7px)",
      }}
      className={`w-fit h-[40px] px-1 py-1 flex items-center gap-3 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClass}
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-[#09081D] text-[9px] font-bold">{title}</h1>
        <div className="flex items-center gap-1">
          <Image
            src={"/assets/send.svg"}
            alt="send"
            width={10}
            height={10}
            className="w-[10px] h-[10px]"
          />
          <p className="text-[#09081D] text-[8px] font-normal opacity-50">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloatingInfo;
