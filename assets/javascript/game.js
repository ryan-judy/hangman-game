var cleArray = ["terminal tower", "west side market", "playhouse square", 
			"lebron james", "the flats", "lake erie", "detroit shoreway"];

function chooseWord () {
    var randomWord = cleArray[Math.floor(Math.random() * cleArray.length)];
	var hiddenWord = "_ ".repeat(randomWord.length)
      document.getElementById("blank").innerHTML = hiddenWord ;
    
    



document.onkeyup = function choice( event ) {
	//document.getElementById("test").innerHTML = '<p>testing what works</p>';

	var choice = event.key;
	var guesses = 8;
	var guess = randomWord.indexOf(choice);
	var output = "";
	guess;
		if(randomWord.indexOf(choice) > -1) {
			for (var i = 0; i <= randomWord.length; i++) {
				//document.getElementById("blank").innerHTML = "_";
				if(guess == i) { 
               		//document.getElementById("blank").innerHTML = choice;
               		var output = output + choice;
          		} 
          		else {
          			 //document.getElementById("blank").innerHTML = "_";
          			 var output = output + "_ ";
          		}


       		}

       		document.getElementById("blank").innerHTML = output;
       		
    		console.log(guess);
			console.log(randomWord);
			console.log(output);


          	

		} else {
			alert("wrong guess! hah!");
		}



	
}

};