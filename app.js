
function countVowels(sentence) {
 
    sentence = sentence.toLowerCase();
  
 
    let vowelCount = 0;

    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];

      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++; 
      }
    }
  
    return vowelCount;
  }
  
  let userInput = prompt("Enter a sentence:");
  
  let totalVowels = countVowels(userInput);
  
  alert("The total number of vowels in the sentence is: " + totalVowels);
  