"use client";
import { useRouter } from "next/navigation";
import HighlightedHeading from "./HighlightedHeading";

const data = {
  heading: "[Insurance] Made [Easy]",
  subHeading:
    "At Inertia, we are commited to provide top-notch services to our customers",
  link: {
    text: "Get a quote",
    href: "/",
  },
};

export default function ShoutOut() {
  const router = useRouter();
  const { heading, subHeading, link } = data;

  return (
    <div id={"offer"} className="w-full flex justify-center items-center my-24">
      <div className="bg-white lg:w-8/12 shadow-lg py-8 px-8 rounded-2xl">
        <div className="lg:flex justify-between w-full">
          <div>
            <HighlightedHeading
              heading={heading}
              className="text-2xl lg:text-5xl text-color-gray font-bold tracking-wide"
              color="text-color-purple"
            />
            <h2 className="text-color-gray-light tracking-wide text-base lg:text-lg mt-6">
              {subHeading}
            </h2>
          </div>
          <div className="mt-4 lg:mt-0 flex-shrink-0">
            <button
              onClick={() => router.push(link.href)}
              className="py-2 lg:py-4 focus:outline-none px-4 lg:px-8 lg:text-2xl text-white bg-color-purple tracking-wider rounded-3xl font-bold"
            >
              {link.text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
