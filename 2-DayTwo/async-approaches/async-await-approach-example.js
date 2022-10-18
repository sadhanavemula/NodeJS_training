
var axios = require('axios');
var fs = require('fs').promises;

async function getMovies() {
    try {
        var response = await axios.get('https://ghibliapi.herokuapp.com/films');
        let moviesList = '';
        response.data.forEach(movie => {
            moviesList += `${movie.title}, ${movie.release_date}\n`;
        });
        await fs.writeFile('asyncawaitMovies.txt', moviesList);
    } catch (error) {
        console.error(`Couldn't call API, Error: ${error}`);
    }
}

getMovies();











/**
 * Alternative syntax of working with promises.
 * Instead of having the result of a promise in then() method,
 * the result is returned as value.
 */

/**
     async function() {
        await [Async Operations]   
    }
 */