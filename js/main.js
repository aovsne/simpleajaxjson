
// AJAX Asynchronised javascript and XML OR JSON(database)

// create variable to make the page change on each button click
var pageCounter = 1

// ajax call function from the json database.
function yoyo(){
	var ourRequest = new XMLHttpRequest()
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json')
	ourRequest.onload = function(){
		if(ourRequest.status >= 200 && ourRequest.status < 400){
			var data = JSON.parse(ourRequest.responseText)
			whatever(data)
		}else{
			console.log('server returning error.')
		}
	}
	ourRequest.send()
	pageCounter++
	if(pageCounter > 3){
		document.getElementById('btn').className = 'hidden'
	}
}

// creating function to insert the data and info into html file.
function whatever(data){
	var content = ''
	
	for(i = 0; i < data.length; i++){
		content += "<h2> " + data[i].name + ' is originated from ' + data[i].species + "</h2>" + "<br>"

		for(u = 0; u < data[i].foods.likes.length; u++){
			content += data[i].foods.likes[u] + " is the food they like. <br> "
		}

		for(k = 0; k < data[i].foods.dislikes.length; k++){
			content += data[i].foods.dislikes[k] + ' are the food they dont like.<br> '
		}
	}

	document.getElementById('result').insertAdjacentHTML('beforeend', content)
}

document.getElementById('btn').addEventListener('click', yoyo, false)




