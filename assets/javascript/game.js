
var cleArray = ["terminal tower", "west side market", "playhouse square", 
			"lebron james", "the flats", "lake erie", "detroit shoreway"]

function chooseWord () {
    var randomWord = cleArray[Math.floor(Math.random() * cleArray.length)];
	var hiddenWord = "_ ".repeat(randomWord.length)
      document.getElementById("blank").innerHTML = hiddenWord ;
    
    


document.onkeyup = function choice( event ) {
	var choice = event.key;
	var guesses = 8;
	var guess = randomWord.indexOf(choice);

		if( guess >= 0) {
			for (var i = 0; i < randomWord.length; i++) {
				var ok = randomWord[i]
			}

			console.log(guess);
			console.log(randomWord);
			console.log(ok);


			// hiddenWord.replace("_", correct);
			
		
			document.getElementById("blank").innerHTML = choice;
			
			

      }
		}

		

		}
		

