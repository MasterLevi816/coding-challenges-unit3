/*Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
*/

function LongestWord(sen) {

   const splitWord = sen.split(" ");
    let longestWord = '';

    for (let i = 0; i < splitWord.length; i++){
      if (splitWord[i].length > longestWord.length)
        longestWord = splitWord[i]
    }

    return longestWord;


}

  console.log(LongestWord("Test which word is longestesttest"));
  console.log(LongestWord("Second test for long word"));