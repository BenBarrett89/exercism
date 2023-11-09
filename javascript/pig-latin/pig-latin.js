const rule1Regex = /^[aeiou]|^xr|^yt/;
const rule2Regex = /^([^aeiou]|^xr|^yt)+(?<postCluster>(?<=q)u|[^y]$)?/;

const translateWord = (word) => {
  if (rule1Regex.test(word)) return word + "ay";
  const consonantClusterMatch = rule2Regex.exec(word) || ["", ""];
  console.log(rule2Regex.exec(word));
  const consonantCluster = consonantClusterMatch[0];
  return word.replace(consonantCluster, "") + `${consonantCluster}ay`;
};

export const translate = (phrase) => {
  return phrase
    .split(" ")
    .map((word) => translateWord(word))
    .join(" ");
};
