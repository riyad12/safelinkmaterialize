var myArray = [
  "1071401931454475661",
  "120549558139814653",
  "8931308078693600516"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];


document.body.innerHTML = randomItem;
