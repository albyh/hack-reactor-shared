/**************************Cumulative Sum Exercise****************************************
Write a while loop that computes the product of multiplying the first n positive integers: 
product = 1 * 2 * 3 * ... * n.
*****************************************************************************************/

function mySum() {
	var i = 1, sum = 0;
	var n = (document.getElementById( 'addMe' ).value)==="Random" ? Math.floor((Math.random() * 10000000) + 1) : Number( document.getElementById( 'addMe' ).value );
	var summaryNode = document.createElement('p');
	var appendToNode = document.getElementById( 'sumSection');

	while (i <= n) {
		sum += i;
		i++;
	}

	//console.log( sum );
	//debugger;
	summaryNode.className = "even";
	summaryNode.innerHTML = "You selected: "+ n +". The sum of 1 to " + n + " is " + sum +".";
	//sumSection.appendChild( summaryNode );
	appendToNode.appendChild( summaryNode );

}  //mySum function


function myProduct() {
	var i = 1, product = 1;
	var n = (document.getElementById( 'multiplyMe' ).value)==="Random" ? 
																	 Math.floor((Math.random() * 1000) + 1) :
																	 Number( document.getElementById( 'multiplyMe' ).value );
	var summaryNode = document.createElement('p');
	var appendToNode = document.getElementById( 'productSection');

	while (i <= n) {
		product *= i;
		i++;
	}

	//console.log( sum );
	//debugger;
	summaryNode.className = "even";
	summaryNode.innerHTML = "You selected: "+ n +". The product of multiplying each number from 1 to " + n + " is " + product +".";
	appendToNode.appendChild( summaryNode );

}  //mySum function




/*****************************************************************************************/

