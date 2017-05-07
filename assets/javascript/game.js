
var cleArray = ["terminal tower", "west side market", "playhouse square", 
			"lebron james", "the flats", "lake erie", "detroit shoreway"]



function chooseWord () {
    var randomWord = cleArray[Math.floor(Math.random() * cleArray.length)];
	var answerArray = []
 		for (var i = 0; i < randomWord.length; i++) {

      answerArray[i] = "_";
      document.getElementById("blank").innerHTML = answerArray;
    }


document.onkeyup = function guess( event ) {
	var guess = event.key;
	var guesses = 8;

	for (var i = 0; i < randomWord.length; i++) {
		if( randomWord.length = indexOf(guess ) ) {
			answerArray.push(guess); 
			document.getElementById("blank").innerHTML = answerArray;
		}

		else {
			document.getElementById("remaining").innerHTML = guesses;
			guesses--;

		}

	return;
	}


};

};



