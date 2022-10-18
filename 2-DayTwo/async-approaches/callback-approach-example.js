var request = require('request');
var fs = require('fs');

request('https://ghibliapi.herokuapp.com/films', function (err, response, body) {
    if (err) {
        console.error(`Could not send request, error: ${err}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Expected status code 200 but received ${response.statusCode}`);
        return;
    }
    let moviesList = '';
    movies = JSON.parse(body);
    movies.forEach(movie => {
        moviesList += `${movie.title}, ${movie.release_date}\n`;

    });
    fs.writeFile('callbackMovies.txt', moviesList, function (err) {
        if (err) throw err;
        console.log('The moviesList has been saved to file system successfully.');
    });
})