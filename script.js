/*****************************************************************************************/
/********************************** Rock, Paper, Scissors*********************************/


function rockPaperScissor() {


	var play = true; 
	var gameNbr = 1;

//	while (play) {

	document.getElementById('rps').focus();

	var userPick = (document.getElementById( 'rps' ).value)==="4" ? 
	Math.floor((Math.random() * 3) + 1) : 
	Number( document.getElementById( 'rps' ).value );

	var computerPick = Math.floor((Math.random() * 3) + 1); 
	// 1 = Rock | 2 = Paper | 3 = Scissors

	var resultNode = document.createElement('p');
	var appendToNode = document.getElementById( 'mySection' );

	if ( userPick === 1 && computerPick === 2) {
		resultNode.innerHTML = "SORRY! Paper covers Rock";
	} else if ( userPick === 1 && computerPick === 3) {
		resultNode.innerHTML = "YOU WIN! Rock beats Scissors!";
	} else if ( userPick === 2 && computerPick === 1 ){
		resultNode.innerHTML = "YOU WIN! Paper covers Rock!";
	} else if ( userPick === 2 && computerPick === 3 ){
		resultNode.innerHTML = "SORRY! Scissors cut Paper";
	} else if ( userPick === 3 && computerPick === 1 ){
		resultNode.innerHTML = "SORRY! Rock beats Scissors (literally!)";
	} else if ( userPick === 3 && computerPick === 2 ){
		resultNode.innerHTML = "YOU WIN! Scissors cuts paper!";
	} else {
		resultNode.innerHTML = "Tie";
	}

	resultNode.innerHTML = "Game " + gameNbr + " - " +resultNode.innerHTML;
	appendToNode.appendChild( resultNode );
	gameNbr++;

	play = confirm( resultNode.innerHTML + "\nSo, do you want to play again?");

//	}   // while (play)

}