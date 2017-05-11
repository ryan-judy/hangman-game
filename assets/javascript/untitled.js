var cleArray = ["terminal tower", "west side market", "playhouse square", 
			"lebron james", "the flats", "lake erie", "detroit shoreway"];

var randomWord; 
var choice;



function chooseWord () {
    		var randomWord = cleArray[Math.floor(Math.random() * cleArray.length)];
    		var hiddenWord = "_ ".repeat(randomWord.length)
      document.getElementById("blank").innerHTML = hiddenWord;

 
document.onkeyup = function choice( event ) {
		var choice = event.key;
if(guess = randomWord.indexOf(choice) >= 0) {
   var index = guess;
    for (i = 0, length = hiddenWord.length; i <= length; i++) { 
         if(i ==+ index) { 
               document.getElementById("blank").innerHTML = choice;
          } 

         
          console.log(index);
			console.log(randomWord);
			console.log(guess);
			console.log(choice);
}
}

}

};