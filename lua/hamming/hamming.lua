local hamming = {}

function hamming.compute(strandA, strandB)
  local distance = 0

  if #strandA ~= #strandB then distance = -1
  else
    for i = 1, #strandA do
      if strandA:sub(i,i) ~= strandB:sub(i,i) then
        distance = distance + 1
      end
    end
  end

  return distance
end

return hamming
