import {
  PersonOutlineIcon,
  MedTruckOutlineIcon,
  ClockOutlineIcon,
  SquareOutlineIcon,
} from "../icons";

const icons = {
  person: <PersonOutlineIcon />,
  truck: <MedTruckOutlineIcon />,
  clock: <ClockOutlineIcon />,
  square: <SquareOutlineIcon />,
};

const data = {
  stats: [
    {
      id: 1,
      icon: "person",
      count: "530",
      text: "Projects Completed",
      icon: "person",
    },
    {
      id: 2,
      icon: "truck",
      count: "530",
      text: "Projects Completed",
      icon: "truck",
    },
    {
      id: 3,
      icon: "clock",
      count: "530",
      text: "Projects Completed",
      icon: "clock",
    },
    {
      id: 4,
      icon: "square",
      count: "530",
      text: "Projects Completed",
      icon: "square",
    },
  ],
};

export default function Stats() {
  const { stats } = data;

  return (
    <div className="mx-auto container lg:mt-48 lg:mb-24 my-24">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex justify-center w-full py-6 ${
              index === 0 ? "" : "lg:border-l border-gray-300"
            }`}
          >
            {icons[stat.icon]}
            <div className="text-color-gray w-1/2 pl-12">
              <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
                {stat.count}
              </h1>
              <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">
                {stat.text}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
