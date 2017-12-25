
//array of buttons to show
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", 
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
 "U", "V", "W", "X", "Y", "Z", "_"];

 var Stan = ["S", "T", "A", "N"]

 var Cartman = ["C","A","R","T","M","A","N"]

//how we are going to get the buttons to display

function logArray(list) {
    for(var i = 0; i < list.length; i++) {
        document.write(list[i]);
    }
};

logArray(letters);

// letters.addClass("alphabet");


//first try, didnt work
document.onclick = function (event) {
    var userGuess= event.onclick;

    if ((userGuess === letters[18]) && (userGuess === letters[19]) && (userGuess === letters[0]) && (userGuess === letters[13])) {
        document.write(stan);

    }
};

//second try, didn't work
document.onclick = function (event) {
    var userGuess= event.onclick;

    if (userGuess === letters[18]) {
        alert(stan);

    }
};














































// var letters = function () {
//     myButtons = document.getElementById('buttons');
//     letters = document.createElement('ul');

//     for (var i = 0; i < letters.length; i++) {
//       letters.id = 'alphabet';
//       list = document.createElement('li');
//       list.id = 'letter';
//       list.innerHTML = alphabet[i];
//       check();
//       myButtons.appendChild(letters);
//       letters.appendChild(list);
//     }
//   }



//   window.onload = function () {
    
//       var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//             'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//             't', 'u', 'v', 'w', 'x', 'y', 'z'];
      
//       var categories;         // Array of topics
//       var chosenCategory;     // Selected catagory
//       var getHint ;          // Word getHint
//       var word ;              // Selected word
//       var guess ;             // Geuss
//       var geusses = [ ];      // Stored geusses
//       var lives ;             // Lives
//       var counter ;           // Count correct geusses
//       var space;              // Number of spaces in word '-'
    
//       // Get elements
//       var showLives = document.getElementById("mylives");
//       var showCatagory = document.getElementById("scatagory");
//       var getHint = document.getElementById("hint");
//       var showClue = document.getElementById("clue");
    
    
    
//       // create alphabet ul
//       var buttons = function () {
//         myButtons = document.getElementById('buttons');
//         letters = document.createElement('ul');
    
//         for (var i = 0; i < alphabet.length; i++) {
//           letters.id = 'alphabet';
//           list = document.createElement('li');
//           list.id = 'letter';
//           list.innerHTML = alphabet[i];
//           check();
//           myButtons.appendChild(letters);
//           letters.appendChild(list);
//         }
//       }
