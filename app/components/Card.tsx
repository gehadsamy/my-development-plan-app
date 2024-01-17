import React from "react";

const Card = ({ title, children }: { title: any; children: any }) => {
  return (
    <div className="max-w-md mx-auto  rounded-xl bg-gray-700 mt-5 shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <h3 className="block mt-1 text-lg leading-tight font-medium text-black">
          {title}
        </h3>
        <p className="mt-2 text-gray-500">{children}</p>
      </div>
    </div>
  );
};

export default Card;
