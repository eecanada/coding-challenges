// Make title into Title Case
function titleCase(title) {
  let finalTitle = [];

  const exceptions = ['a', 'an', 'the'];
  let splitWord = title.split(' ');
  let lowercase = splitWord.map((word) => word.toLowerCase());
  let firstLetterUp = lowercase.map(
    (word) => `${word[0].toUpperCase()}${word.slice(1)}`
  );
  finalTitle = firstLetterUp.map((word) => {
    if (word.toLowerCase() === exceptions[0]) {
      word = word.toLowerCase();
      finalTitle.push(word);
    } else if (word.toLowerCase() === exceptions[1]) {
      word = word.toLowerCase();
      finalTitle.push(word);
    } else if (word.toLowerCase() === exceptions[2]) {
      word = word.toLowerCase();
      finalTitle.push(word);
    } else {
      word = word;
      finalTitle.push(word);
    }
    console.log(finalTitle.join(' '));
  });
}

titleCase('This iS a NIce tiTLe The')
