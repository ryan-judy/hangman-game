
var cleArray = ["terminal tower", "west side market", "playhouse square", 
			"lebron james", "the flats", "lake erie", "detroit shoreway"];

var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function chooseWord () {
    var randomWord = cleArray[Math.floor(Math.random() * cleArray.length)];
	var hiddenWord = "_ ".repeat(randomWord.length)
      document.getElementById("blank").innerHTML = hiddenWord ;
    
    


document.onkeyup = function choice( event ) {
	var choice = event.key;
	var guesses = 8;

		if( guess = randomWord.indexOf(choice) >= 0) {
			for (var i = 0; i <= randomWord.length; i++) {
				 if(guess = i) { 
               document.getElementById("blank").innerHTML = choice;

          		} 
          		else {
          			 document.getElementById("blank").innerHTML = hiddenWord;
          		}
          		
       		}

    		console.log(guess);
			console.log(randomWord);
			console.log(hiddenWord);


          	

		}
}

}
			

		
		

