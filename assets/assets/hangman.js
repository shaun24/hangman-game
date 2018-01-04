
// //array of buttons to show
// var letters = ["A", "B", "C", "D", "E", "F", "G", "H", 
// "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
//  "U", "V", "W", "X", "Y", "Z", "_"];

// //  var Stan = ["S", "T", "A", "N"]

// //  var Cartman = ["C","A","R","T","M","A","N"]

//  var words = ['car', 'bus', 'boat', 'airplane'];

//  var chosen = words[Math.floor(Math.random()* words.length)];

//  start()
// console.log(chosen)
//  function start(){
//     var usrGuess = '';
//     var i = 0;
//     var newarr = ''
//     var letters = [];
//      var dash =[];
//      for(var i = 0; i <chosen.length; i++){
//          dash.push('-')
//          letters.push(chosen[i])
//      }
//     document.getElementById('toGuess').innerHTML = dash;
//      console.log(dash)
//      console.log(letters)

//     document.onkeypress = function (e){
//         usrGuess = e.key;
//         i = letters.indexOf(usrGuess)
//     for(var y = 0; y < letters.length; y++){
//         //debugger;
//         if( letters[i] > -1 && letters[y] == letters[i]){
            
//             newarr = dash.splice(i, 1, usrGuess)
//             document.getElementById('toGuess').innerHTML = newarr;
//         }
       
//     }
//         console.log(letters.indexOf(usrGuess));
//         console.log(e.key)
//     }
//  }



//how we are going to get the buttons to display

// function logArray(list) {
//     for(var i = 0; i < list.length; i++) {
//         document.write(list[i]);
//     }
// };

// logArray(letters);

// letters.addClass("alphabet");


// //first try, didnt work
// document.click = function (event) {
//     var userGuess= event.onclick;

//     if ((userGuess === letters[18]) && (userGuess === letters[19]) && (userGuess === letters[0]) && (userGuess === letters[13])) {
//         document.write(stan);

//     }
// };

// //second try, didn't work
// document.click = function (event) {
//     var userGuess= event.onclick;

//     if (userGuess === letters[18]) {
//         alert(stan);

//     }
// };




//document.getElementById('myBtn').addEventListener("click", function() {


    start();
    //});
    
    function start(){
        var words = ['stan', 'kyle', 'cartman', 'randy'];
        var info = pcChoice(); 
        var score = 0;
        var guess = 5;
    
        document.onkeypress = function (e){
           compare(e.key);
        }
    
        document.getElementById('score').innerHTML = score;
        document.getElementById('guess').innerHTML = guess;
    
        function pcChoice() {
            var chosen = words[Math.floor(Math.random()* words.length)];
            var dash = '-';
            var dashArr = [];
            var letterArr = chosen.split('');
            var result = [];
    
            for (var i=0; i < letterArr.length; i++){
                dashArr.push(dash);
            }
    
            toGuess.innerHTML = dashArr;
            
            result = [chosen, dashArr, letterArr];
            
            console.log(result);
            console.log(info)
            
            return result;
    
    
         }
    
        function compare(letter){
            var dash = info[1];
            var lettArr = info[2];
            var found = [];
    
            for (var i = 0; i < lettArr.length; i++){
                if(lettArr[i] == letter){
                    found = lettArr[i];
                    dash.splice(i, 1, found)
                }
            }
    
            var y = lettArr.indexOf(letter);
            var z = dash.indexOf('-')
            
            
            if ( y == -1){
                guess-- 
                document.getElementById('guess').innerHTML = guess;
                
            }else if(z == -1){
                setTimeout(reset, 1000)
                document.getElementById('toGuess').innerHTML = dash;
                score++
                document.getElementById('score').innerHTML = score;
            }
    
            if( y == -1 && guess == 0) { 
                guess = 5;
                score = 0;
                setTimeout(reset, 1000)
                document.getElementById('score').innerHTML = score;
                document.getElementById('toGuess').innerHTML = dash;
                document.getElementById('guess').innerHTML = guess;
    
            }
            toGuess.innerHTML = dash;
           
         }
    
         function reset(){
            info = pcChoice()
           
    
         }
    }










































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
