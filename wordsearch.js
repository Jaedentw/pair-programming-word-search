const wordSearch = (letters, word) => {

  let verticalMatrix = [];
  for (let i = 0; i < letters[0].length; i++) {
    let array = [];
    for (let y = 0; y < letters.length; y++) {
      array.push(letters[y][i]);
    }
    verticalMatrix.push(array);
  }

  const verticalJoin = verticalMatrix.map(ls => ls.join(''));
  for (let x of verticalJoin) {
    if (x.includes(word)) {
      return true;
    }
  }
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;