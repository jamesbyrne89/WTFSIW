const endpoint = 'https://random-movie.herokuapp.com/random';

const movies = [];

function getJSON(){
		document.querySelector('.movie-holder').classList.remove('visible');
	document.querySelector('.movie-holder').classList.add('invisible');
		document.querySelector('.movie-holder').classList.add('off-right');
		document.querySelector('.btn-wrapper').classList.add('hide');
		document.querySelector('.instructions').classList.add('invisible');
		document.querySelector('.try-again').classList.add('invisible');
		document.querySelector('.try-again').classList.remove('visible');
		document.querySelector('.suggestion').classList.add('invisible');
		document.querySelector('.suggestion').classList.remove('visible');
		document.querySelector('.suggestion').classList.remove('hide');
		document.querySelector('.try-again').classList.remove('hide');
		document.querySelector('.left-line').classList.add('off-left');
	setTimeout(function() {

	$.getJSON('https://random-movie.herokuapp.com/random', (data) => {
		let source = document.createAttribute("src");
		source.value=(data.Poster);
		document.querySelector('.poster').setAttributeNode(source);
		document.querySelector('.suggestion').innerHTML=(`You should watch <span class="suggestion-name">${data.Title}</span>`);
		document.querySelector('.runtime').textContent=(data.Runtime);
		document.querySelector('.year').textContent=(data.Year);
		document.querySelectorAll('.divider').textContent=('/');
		document.querySelector('.genre').textContent=(data.Genre);
		document.querySelector('.plot').textContent=(data.Plot);
		document.querySelector('.rating').innerHTML=(`IMDB rating: <span class="num">${data.imdbRating}</span>`);
		document.querySelector('.actors').textContent=(data.Actors);
		document.querySelector('.main-title').classList.add('shrunk');
document.querySelector('.left-line').classList.add('hide');
		
		document.querySelector('.subtitle').classList.add('sub-small');
		document.querySelector('.suggestion').classList.add('visible');
	document.querySelector('.suggestion').classList.remove('invisible');	
		
		document.querySelector('.movie-holder').classList.remove('off-right');
	document.querySelector('.movie-holder').classList.add('visible');
	document.querySelector('.movie-holder').classList.remove('invisible');
})
		}, 1000);

	setTimeout(function() {
document.querySelector('.try-again').classList.remove('invisible');
		document.querySelector('.try-again').classList.add('visible');	
	}, 3000);

}

document.onkeydown = function(e){
    if(e.keyCode == 32){
    	e.preventDefault();
        getJSON();
    }
};


document.querySelector('.try-again').addEventListener('click', getJSON);