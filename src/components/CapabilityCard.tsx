import React from "react";

type CapabilityCardProps = {
  title: string;
  description: string;
  images: string[]; // 1 or 2 images
  reverse?: boolean; // false = text left, images right | true = text right, images left
};

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  title,
  description,
  images,
  reverse = false,
}) => {
  const hasTwoImages = images.length === 2;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* Grid with proper reverse support */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          reverse ? "lg:grid-cols-2 lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div
          className={`space-y-6 lg:space-y-8 ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title}
            <span className="text-teal-600 ml-3">◦</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Images Side – Horizontal Layout */}
        <div
          className={`grid grid-cols-2 gap-6 lg:gap-10 -mx-6 lg:mx-0 ${
            reverse ? "lg:order-1" : "lg:order-2"
          } ${hasTwoImages ? "" : "grid-cols-1 lg:grid-cols-1"}`}
        >
          {/* First Image */}
          <div
            className={`relative rounded-3xl overflow-hidden shadow-2xl ${
              hasTwoImages ? "" : "col-span-2"
            }`}
          >
            <img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover aspect-square md:aspect-[4/5]"
            />
          </div>

          {/* Second Image – Only if provided */}
          {hasTwoImages && (
            <div className="relative rounded-3xl overflow-hidden shadow-2xl -mt-12 md:-mt-20 lg:-mt-28">
              <img
                src={images[1]}
                alt={title}
                className="w-full h-full object-cover aspect-square md:aspect-[4/5]"
              />
            </div>
          )}

          {/* Keep layout balanced when only one image */}
          {!hasTwoImages && <div className="hidden lg:block" />}
        </div>
      </div>
    </div>
  );
};

export default CapabilityCard;
