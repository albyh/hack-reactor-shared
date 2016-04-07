/*********************************************************/

//This will create a long HTML string 
/*
var n = 10, i = 1, html = "", evenOrOddClass = ""; 

while ( i < n ) {

	//evenOrOddClass = "class = " + ((i & 1) ? "'odd'" : "'even'"); 
	//html += "<p "+evenOrOddClass +">" + i + "<p><hr>";

	//html += "<p "+"class = " + ((i & 1) ? "'odd'" : "'even'") +">" + i + "<p><hr>";	//This works (bitwise)
	html += "<p "+"class=" + (!!(i % 2) ? "'odd'" : "'even'") +">" + i + "<p><hr>";	//This works (double bang modulus)
	i++;
}

html += "<p "+"class=" + ((i & 1) ? "'odd'" : "'even'") +">" + i + "<p>";	// i = n once loop finishes, so add last number without <hr>

console.log( html );
document.querySelector('#addString').innerHTML = html; 
*/

/******************* Adrian's Solution *******************/

/*var n = 10;
var str = "";
var i = 1;while (i<=n) {
 var item = document.createElement('p');
 item.innerText = i;
 document.body.appendChild(item);
    str+=i;
 i++;
}
console.log(str);*/

/*********************************************************/

// This will append to the document.body without the need for a tag to use querySelector on 

var n = 10, i = 1, html = ''; 
var pNode, textNode; 
var elementType = "p"; 								// create a tag/element/node of your choice (try aside)
var ruleType = "hr";   								// create a hr or br tag (or "")
var includeRule = true; 
var addTo = document.querySelector('body'); 	//querySelector will select the first element of provided type

while ( i <= n ) {
	pNode = document.createElement(elementType);
	pNode.className = ((i & 1) ? 'odd' : 'even'); 
	pNode.innerHTML = i; 
	//textNode = document.createTextNode(i);  // Why would you create a text node instead 
	//pNode.appendChild(textNode);				// of using innerHTML or textContent
	addTo.appendChild(pNode);       				//	document.body.appendChild(pNode); 			
	if ( i < n && includeRule && ruleType ){
		document.body.appendChild( document.createElement(ruleType) );
	}
	console.log(pNode);
	i++; 
}

