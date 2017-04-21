local house = {}

local words = {
  "the house that Jack built",
  "the malt\nthat lay in",
  "the rat\nthat ate",
  "the cat\nthat killed",
  "the dog\nthat worried",
  "the cow with the crumpled horn\nthat tossed",
  "the maiden all forlorn\nthat milked",
  "the man all tattered and torn\nthat kissed",
  "the priest all shaven and shorn\nthat married",
  "the rooster that crowed in the morn\nthat woke",
  "the farmer sowing his corn\nthat kept",
  "the horse and the hound and the horn\nthat belonged to"
}

function house.embedNounPhrase (line)
  if line > 0 then
    return " " .. words[line] .. house.embedNounPhrase(line - 1)
  else
    return ""
  end
end

function house.verse (line)
  return "This is" .. house.embedNounPhrase(line) .. "."
end

function house.recite ()
  local recitation = {}
  for i = 1, #words do table.insert(recitation, house.verse(i)) end
  return table.concat(recitation, "\n")
end

return house
