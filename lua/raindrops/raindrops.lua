local rainspeak = {
  {3, 'Pling'},
  {5, 'Plang'},
  {7, 'Plong'}
}

local function isFactorOf(number, factor)
  return number % factor == 0
end

local function raindrops(number)
  local response = ''
  for _, v in ipairs(rainspeak) do
    local factor, speak = table.unpack(v)
    if isFactorOf(number, factor) then
      response = response .. speak
    end
  end
  if response == '' then response = response .. number end
  return response
end

return raindrops
