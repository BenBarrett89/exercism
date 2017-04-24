local rainspeak = {
  {factor = 3, speak = 'Pling'},
  {factor = 5, speak = 'Plang'},
  {factor = 7, speak = 'Plong'}
}

function isFactorOf(number, factor)
  return number % factor == 0
end

function raindrops(number)
  local response = ''
  for index = 1, #rainspeak do
    if isFactorOf(number, rainspeak[index].factor) then
      response = response .. rainspeak[index].speak
    end
  end
  if response == '' then response = response .. number end
  return response
end

return raindrops
