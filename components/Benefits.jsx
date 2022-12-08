import {
  HeartIcon,
  HomeIcon,
  CarIcon,
  BuildingIcon,
  PlaneIcon,
  UmbrellaIcon,
} from "../icons";

const data = {
  heading: "Choose your Insurance",
  description: "Keep your Life Simple, Safe and Wealthy",
  linkId: "benefits",
  benefits: [
    {
      id: 1,
      icon: "home",
      title: "Home Insurance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at",
    },
    {
      id: 2,
      icon: "car",
      title: "Car Insurance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at",
    },
    {
      id: 3,
      icon: "heart",
      title: "Life Insurance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at",
    },
    {
      id: 4,
      icon: "building",
      title: "Business Insurance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at",
    },
    {
      id: 5,
      icon: "plane",
      title: "Travel Insurance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at",
    },
    {
      id: 6,
      icon: "umbrella",
      title: "Other Insurance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at",
    },
  ],
};

const icons = {
  heart: <HeartIcon />,
  home: <HomeIcon />,
  car: <CarIcon />,
  building: <BuildingIcon />,
  plane: <PlaneIcon />,
  umbrella: <UmbrellaIcon />,
};

function ShowIcon({ icons, selected }) {
  return icons[selected];
}

export default function Benefits() {
  const { heading, description, benefits, linkId } = data;
  return (
    <div id={linkId} className="bg-gray-light px-4 xl:px-0 py-16 rounded-2xl">
      <div className="mx-auto container">
        <div className="mb-4 lg:mb-20">
          <h1 className="text-center text-2xl lg:text-5xl text-gray-light font-bold text-color-gray tracking-1px">
            {heading}
          </h1>
          <h2 className="text-base lg:text-lg text-center text-color-gray-light mt-5 tracking-wider">
            {description}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="max-w-sm m-4 bg-white rounded-3xl shadow-md py-6 px-16"
            >
              <ShowIcon icons={icons} selected={benefit.icon} />
              <div className="pt-5">
                <h1 className="text-xl lg:text-2xl font-semibold tracking-wider text-color-gray">
                  {benefit.title}
                </h1>
                <p className="mt-4 tracking-wider leading-8 text-base w-11/12 text-color-gray-light">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
