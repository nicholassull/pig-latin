// Business Logic

function pigLatin (text){
  let vowelArray = ["a", "e", "i", "o", "u"];
  let finalString = ""
  textArray = text.split(" ");
  textArray.forEach(function(word) {
    var firstVowel=word.match(/[aeiou]/).join('');
    var firstPosition=word.indexOf(firstVowel);
    if (firstPosition === 0) {
      finalString = finalString.concat(word+"way ");
    } else if (/^qu/gi.test(word)) {
      let newString = ""
      const wordSlice = word.slice(2);
      newString = newString.concat(wordSlice + "quay ");
      finalString = finalString + newString;
    } else {
    let beginning = word.slice(firstPosition);
    newStr =  word.substring(0, firstPosition);
    finalString = finalString.concat(beginning + newStr +"ay ");
    }
  });
  return finalString; 
}