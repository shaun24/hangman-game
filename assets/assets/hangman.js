

    start();

    
    function start(){
        var words = ['stan', 'kyle', 'cartman', 'randy', 'token', 'chef', 'southparkmall'];
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

            // letterArr = [s, t, a, n]
    
            for (var i=0; i < letterArr.length; i++){
                dashArr.push(dash);
                // [s, t, a, n]
            }
    
            toGuess.innerHTML = dashArr;
            
            result = [chosen, dashArr, letterArr];
            
            console.log(result);
            console.log(info)
            
            return result;
    
    
         }
    
        function compare(letter) {
            var dash = info[1];
            var lettArr = info[2];
            var found = [];
    
            for (var i = 0; i < lettArr.length; i++) {
                if(lettArr[i] == letter) {
                    found = lettArr[i];
                    dash.splice(i, 1, found)
                }
            }
    
            var y = lettArr.indexOf(letter);
            var z = dash.indexOf('-');
            
            
            if (y == -1) {
                guess-- 
                document.getElementById('guess').innerHTML = guess;
                
            }
            else if (z == -1) {
                setTimeout(reset, 1000);
                document.getElementById('toGuess').innerHTML = dash;
                score++
                document.getElementById('score').innerHTML = score;
            }
    
            if (y == -1 && guess == 0) { 
                guess = 5;
                score = 0;
                setTimeout(reset, 1000);
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
