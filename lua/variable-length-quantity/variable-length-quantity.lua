-- This cannot be the best way to do this... basically tried to do the way
-- of the example at https://en.wikipedia.org/wiki/Variable-length_quantity#Examples
local vlq = {}

local function numberToBinary(number)
  local binary = {}
  while number > 0 do
    bit = math.fmod(number, 2)
    table.insert(binary, bit)
    number = (number - bit) / 2
  end
  if #binary == 0 then table.insert(binary, 0) end
  return binary
end

local function binaryToNumber(binary)
  local number = 0
  for i, v in ipairs(binary) do
    number = number + (v * 2 ^ (i - 1))
  end
  return number
end

local function padToSeven(binary)
  for i=1, 7 - #binary do
    table.insert(binary, 0)
  end
  return binary
end

local function joinTables(frontTable, backTable)
  local newTable = frontTable
  for _, item in ipairs(backTable) do
    table.insert(newTable, item)
  end
  return newTable
end

local function splitToGroups(binary)
  local groups = {}
  local group = {}
  for i, bit in ipairs(binary) do
    table.insert(group, bit)
    if i % 7 == 0 or i == #binary then
      if (#group < 7) then group = padToSeven(group) end
      if (#groups == 0) then table.insert(group, 0)
      else table.insert(group, 1) end
      table.insert(groups, binaryToNumber(group))
      group = {}
    end
  end
  return groups
end

function vlq.decode(bytes)
  local totals = {}
  local total = {}
  local pushToTotals = false
  for i, byte in ipairs(bytes) do
    local binary = numberToBinary(byte)
    if #binary == 8 then
      if i == #bytes and binary[#binary] ~= 0 then error('incomplete byte sequence') end
      table.remove(binary, #binary)
    else
      binary = padToSeven(binary)
      pushToTotals = true
    end
    total = joinTables(binary, total)
    if pushToTotals then
      table.insert(totals, binaryToNumber(total))
      total = {}
      pushToTotals = false
    end
  end
  return totals
end

function vlq.encode(bytes)
  local values = {}
  for _, byte in ipairs(bytes) do
    local binary = numberToBinary(byte)
    local groups = splitToGroups(binary)
    for i=1, #groups do
      table.insert(values, groups[#groups + 1 - i])
    end
  end
  return values
end

return vlq
