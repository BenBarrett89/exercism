const animals = [
  { name: "fly" },
  {
    name: "spider",
    rhyme: "It wriggled and jiggled and tickled inside her.\n",
    extra: " that wriggled and jiggled and tickled inside her",
  },
  {
    name: "bird",
    rhyme: "How absurd to swallow a bird!\n",
  },
  {
    name: "cat",
    rhyme: "Imagine that, to swallow a cat!\n",
  },
  {
    name: "dog",
    rhyme: "What a hog, to swallow a dog!\n",
  },
  {
    name: "goat",
    rhyme: "Just opened her throat and swallowed a goat!\n",
  },
  {
    name: "cow",
    rhyme: "I don't know how she swallowed a cow!\n",
  },
  {
    name: "horse",
    end: "She's dead, of course!\n",
  },
];

export class Song {
  verse(number) {
    const animal = animals[number - 1];
    if (animal.end) {
      return (
        `I know an old lady who swallowed a ${animal.name}.` +
        "\n" +
        `${animal.end}`
      );
    }
    const tail = animals
      .slice(0, number)
      .reverse()
      .map((animal, index, array) => {
        return index + 1 === array.length
          ? `I don't know why she swallowed the ${animal.name}. Perhaps she'll die.\n`
          : `She swallowed the ${animal.name} to catch the ${
              array[index + 1].name
            }${array[index + 1].extra ?? ""}.`;
      })
      .join("\n");
    return (
      `I know an old lady who swallowed a ${animal.name}.\n${
        animal.rhyme ?? ""
      }` + tail
    );
  }

  verses(startingVerse, endingVerse) {
    const difference = endingVerse - startingVerse;
    return new Array(difference + 1)
      .fill(null)
      .map((_, index) => this.verse(startingVerse + index))
      .concat([""])
      .join("\n");
  }
}
