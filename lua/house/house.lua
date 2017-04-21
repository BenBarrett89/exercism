local house = {}

local words = {
  [1]={nounPhrase = "house", verb="Jack built"},
  [2]={nounPhrase = "malt", verb = "lay in"},
  [3]={nounPhrase = "rat", verb = "ate"},
  [4]={nounPhrase = "cat", verb = "killed"},
  [5]={nounPhrase = "dog", verb = "worried"},
  [6]={nounPhrase = "cow with the crumpled horn", verb = "tossed"},
  [7]={nounPhrase = "maiden all forlorn", verb = "milked"},
  [8]={nounPhrase = "man all tattered and torn", verb = "kissed"},
  [9]={nounPhrase = "priest all shaven and shorn", verb = "married"},
  [10]={nounPhrase = "rooster that crowed in the morn", verb = "woke"},
  [11]={nounPhrase = "farmer sowing his corn", verb = "kept"},
  [12]={nounPhrase = "horse and the hound and the horn", verb = "belonged to"},
}

function house.embedNounPhrase (line)
  local THAT = '\nthat '
  if line == 1 then THAT = ' that ' end
  if line > 0 then
    return ' the ' .. words[line].nounPhrase .. THAT .. words[line].verb .. house.embedNounPhrase(line - 1)
  else
    return ''
  end
end

function house.verse (line)
  return 'This is' .. house.embedNounPhrase(line) .. '.'
end

function house.recite ()
  local recitation = ''
  for i=1,#words do recitation = recitation .. house.verse(i) .. '\n' end
  return recitation:sub(0, #recitation - 1)
end

return house
