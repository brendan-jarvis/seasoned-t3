import type { ProduceType } from "@prisma/client";

type BadgeProps = {
  produceType: ProduceType;
};

export const Badge = ({ produceType }: BadgeProps) => {
  const colors = {
    gray: "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10",
    red: "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10",
    yellow:
      "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20",
    green:
      "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",
    blue: "inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10",
    indigo:
      "inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10",
    purple:
      "inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10",
    pink: "inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10",
  };

  const produceTypeToColor = {
    Vegetable: colors.blue,
    SpecialtyVegetable: colors.gray,
    Fruit: colors.red,
    Berry: colors.purple,
    StoneFruit: colors.indigo,
    SpecialtyFruit: colors.yellow,
    EdibleFlower: colors.pink,
    Herb: colors.green,
  };

  const color = produceTypeToColor[produceType];

  return <span className={color}>{produceType}</span>;
};
