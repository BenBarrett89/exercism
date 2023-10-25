export const colorCode = (color: string): number => {
  return COLORS.findIndex(item => item === color)
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]
