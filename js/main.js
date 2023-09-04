// function foo(str) {
//     let word = "";
//   const newWordArr = [];

//   for (let index = 1; index <= str.length; index++) {
//     const element = str[index - 1];

//     // word = str.slice(index) + element;
//     word = str.slice(1) + element;

//     newWordArr.push(word);
//   }

//   return newWordArr;
// }

function foo(str) {
  let word = str;
  const newWordArr = [word];

  for (let index = 1; index <= str.length; index++) {
    word = str.slice(index) + str.slice(0, index);

    newWordArr.push(word);
  }

  return newWordArr;
}

// console.log(foo("robot"));
console.log(foo("fly"));
// lyf / yfl / fly
// console.log(foo("forest"));
