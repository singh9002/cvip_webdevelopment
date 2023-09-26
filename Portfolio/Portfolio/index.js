
let alternating = true;
const words =  ["Web Designer","Frontend Developer", "Programmer"];
let currentWordIndex = 0;

function writeAndErase(word, delay) {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index <= word.length) {
      document.getElementById("custom").innerText = word.slice(0, index);
      index++;
    } else {
      clearInterval(intervalId);
      setTimeout(() => {
        eraseWord(word, delay);
      }, delay);
    }
  }, delay);
}

function eraseWord(word, delay) {
  let index = word.length;
  const intervalId = setInterval(() => {
    if (index >= 0) {
      document.getElementById("custom").innerText = word.slice(0, index);
      index--;
    } else {
      clearInterval(intervalId);
      if (alternating) {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        writeAndErase(words[currentWordIndex], delay);
      } else {
        alternating = true;
      }
    }
  }, delay);
}
writeAndErase(words[currentWordIndex], 200);



const listItems = document.querySelectorAll("div.bar");
const arr = [90, 60, 90, 75];
function updateBar(i) {
  for (const li of listItems) {
    const percentage = arr[i];
    i = i + 1;
    
    li.style.width = percentage + '%';
  }
}

updateBar(0);