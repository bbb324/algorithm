function reverseOnlyLetters(S) {
  let wordList = [];
  let signList = []
  let res = new Array(S.length);
  for(let i = 0; i<S.length; i++) {
    if(/\w/i.test(S[i])) {
      wordList.push([S[i], i])
    } else {
      signList.push([S[i], i])
    }
  }
  let list = reverse(wordList);
  for(let i = 0; i<list.length; i++) {
      let [val, key] = list[i];
      res[key] = val;
  }
  for(let i = 0; i<signList.length; i++) {
    let [val, key] = signList[i];
    res[key] = val;
  }
  return res.join('')
}

function reverse(wordList) {
  let list = [];
  wordList.forEach(item => {
    list.push(item[0])
  })
  list.reverse();
  let val = [];
  wordList.forEach((item, key) => {
    val.push([list[key], item[1]])
  })
  return val;
}

console.log(reverseOnlyLetters('z<*zj'))