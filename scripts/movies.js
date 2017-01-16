const endpoint = 'https://random-movie.herokuapp.com/random';

const movies = [];

function getJSON(){
	$.getJSON('https://random-movie.herokuapp.com/random', (data) => {
		let source = document.createAttribute("src");
		source.value=(data.Poster);
		document.querySelector('.poster').setAttributeNode(source);
		console.log(data);
		document.querySelector('.suggestion').innerHTML=(`You should watch <span class="suggestion-name">${data.Title}</span>`);
		document.querySelector('.runtime').textContent=(data.Runtime);
		document.querySelector('.year').textContent=(data.Year);
		document.querySelectorAll('.divider').textContent=('/');
		document.querySelector('.genre').textContent=(data.Genre);
		document.querySelector('.plot').textContent=(data.Plot);
		document.querySelector('.rating').textContent=(`IMDB rating: ${data.imdbRating}`);
		document.querySelector('.actors').textContent=(data.Actors);
		document.querySelector('.main-title').classList.add('shrunk');
		document.querySelector('.try-again').classList.add('visible').classList.remove('invisible');
})
}

document.onkeydown = function(e){
    if(e.keyCode == 32){
    	e.preventDefault();
        getJSON();
    }
};
