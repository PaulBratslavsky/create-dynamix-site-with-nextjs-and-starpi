import { HeartIcon, HomeIcon, CarIcon, BuildingIcon, PlaneIcon, UmbrellaIcon,  } from "../icons";

const icons = {
  heart: <HeartIcon />,
  home: <HomeIcon />,
  car: <CarIcon />,
  building: <BuildingIcon />,
  plane: <PlaneIcon />,
  umbrella: <UmbrellaIcon />,
}

function showIcon(icon) {
  return icons[icon];
}

export default function Benefits({ data }) {

  return (
    <div className="bg-gray-light px-4 xl:px-0 py-16 rounded-2xl">
      <div className="mx-auto container">
        <div className="mb-4 lg:mb-20">
          <h1 className="text-center text-2xl lg:text-5xl text-gray-light font-bold text-color-gray tracking-1px">
            Choose your Insurance
          </h1>
          <h2 className="text-base lg:text-lg text-center text-color-gray-light mt-5 tracking-wider">
            Keep your Life Simple, Safe and Wealthy
          </h2>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-sm m-4 bg-white rounded-3xl shadow-md py-6 px-16">
            {showIcon("heart")}
            <div className="pt-5">
              <h1 className="text-xl lg:text-2xl font-semibold tracking-wider text-color-gray">
                Home Insurance
              </h1>
              <p className="mt-4 tracking-wider leading-8 text-base w-11/12 text-color-gray-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                ultrices nunc, non at
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
