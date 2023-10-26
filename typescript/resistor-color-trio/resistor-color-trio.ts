export function decodedResistorValue([first, second, third]: Color[]): string {
  const ohms = getOhms(first, second, third);
  return getOhmsString(ohms);
}

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

enum MetricPrefix {
  giga = 1000000000,
  mega = 1000000,
  kilo = 1000,
}

type Color = keyof typeof Colors;

const getOhms = (first: Color, second: Color, third: Color): number => {
  return (Colors[first] * 10 + Colors[second]) *  Math.pow(10, Colors[third])
}

const countTrailingZeros = (number: number): number => {
  return `${number}`.split("").reverse().findIndex(num => parseInt(num) > 0);
}

const getOhmsString = (ohms: number): string => {
  const trailingZeroes = countTrailingZeros(ohms);

  let metricPrefix: MetricPrefix | undefined = undefined;
  if (trailingZeroes === 9) {
    metricPrefix = MetricPrefix.giga;
  } else if (trailingZeroes >= 6){
    metricPrefix = MetricPrefix.mega;
  } else if (trailingZeroes >= 3){
    metricPrefix = MetricPrefix.kilo;
  }

  return `${metricPrefix ? ohms / metricPrefix : ohms} ${metricPrefix ? MetricPrefix[metricPrefix] : ''}ohms`;
}
