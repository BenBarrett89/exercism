local diff = {}

function diff.square_of_sums (number)
  local total = 0
  for i=1,number do
    total = total + i
  end
  return total * total
end

function diff.sum_of_squares (number)
  local total = 0
  for i=1,number do
    total = total + (i * i)
  end
  return total
end

function diff.difference_of_squares (number)
  return diff.square_of_sums(number) - diff.sum_of_squares(number)
end

return diff
