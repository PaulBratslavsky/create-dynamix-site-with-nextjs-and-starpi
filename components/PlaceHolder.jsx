import React from "react";

export default function PlaceHolder({ heading, text }) {
  return (
    <section
      className="py-20 md:py-28 bg-color-purple text-white rounded-2xl my-8"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-heading font-bold">
            {heading}
          </h2>
          <p className="mb-6 text-lg md:text-xl font-heading font-medium text-coolGray-500">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
