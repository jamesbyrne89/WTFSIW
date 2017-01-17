const endpoint = 'https://random-movie.herokuapp.com/random';

const movies = [];

function getJSON() {
    document.querySelector('.left-line').classList.add('off-left');

    setTimeout(function() {
        document.querySelector('.left-line').classList.add('hide');
        document.querySelector('.subtitle').classList.add('sub-small');
        document.querySelector('.main-title').classList.add('shrunk');
    }, 500);
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


    setTimeout(function() {
        $.ajax({
            url: 'https://random-movie.herokuapp.com/random',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(data) {
                let source = document.createAttribute("src");
                source.value = (data.Poster);
                let altText = document.createAttribute("alt");
                altText.value = (`Poster for ${data.Title}`);
                console.log(data);
                document.querySelector('.poster').setAttributeNode(source);
                document.querySelector('.poster').setAttributeNode(altText);
                document.querySelector('.suggestion').innerHTML = (`Why don't you watch <span class="suggestion-name">${data.Title}</span>`);
                document.querySelector('.top-info-wrapper').innerHTML = (
                 `<span class="year">${data.Year}</span>
						<span class="divider">/</span>
						<span class="genre">${data.Genre}</span>
						<span class="divider">/</span>
						<span class="runtime">${data.Runtime}</span>`);
                document.querySelector('.genre').textContent = (data.Genre);
                document.querySelector('.plot').textContent = (data.Plot);
                document.querySelector('.rating').innerHTML = (`IMDB rating: <span class="num">${data.imdbRating}</span>`);
                document.querySelector('.actors').textContent = (data.Actors);
                document.querySelector('.suggestion').classList.add('visible');
                document.querySelector('.suggestion').classList.remove('invisible');
                document.querySelector('.movie-holder').classList.remove('off-right');
                document.querySelector('.movie-holder').classList.add('visible');
                document.querySelector('.movie-holder').classList.remove('invisible');
                   setTimeout(function() {
        document.querySelector('.try-again').classList.remove('invisible');
        document.querySelector('.try-again').classList.add('visible');
    }, 2000);
            }
        });

    }, 800);

 

}

document.onkeydown = function(e) {
    if (e.keyCode == 32) {
        e.preventDefault();
        getJSON();
    }
};


document.querySelector('.try-again a').addEventListener('click', getJSON);