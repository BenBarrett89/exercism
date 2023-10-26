export const decodedValue = ([firstColor, secondColor]: Color[]): number => {
  return Colors[firstColor] * 10 + Colors[secondColor];
}

type Color = keyof typeof Colors;

export enum Colors {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,  
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}
