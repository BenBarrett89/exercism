local bob = {}

local QUESTION_RESPONSE = 'Sure'
local SILENCE_RESPONSE = 'Fine, be that way.'
local YELLING_RESPONSE = 'Whoa, chill out!'
local DEFAULT_RESPONSE = 'Whatever'

local function isQuestion(talk)
  return talk:sub(talk:len()) == '?'
end

local function isYelling(talk)
  return talk:upper() == talk
end

local function isSilence(talk)
  return talk:len() == 0
end

function bob.hey(talk)
  local response
  if (isQuestion(talk)) then response = QUESTION_RESPONSE
  elseif (isSilence(talk)) then response = SILENCE_RESPONSE
  elseif (isYelling(talk)) then response = YELLING_RESPONSE
  else response = DEFAULT_RESPONSE end
  return response
end

return bob
