
// Promises for consise Async Approach
// Install axios package: npm install axios

var axios = require('axios');
// var fs = require('fs').promises;
var fs = require('fs/promises');

/*
promisefunction()
    .then()     // This method will execute if promise is fulfilled.
    .catch()    // This method will execute if promise is rejected.
*/

// axios.get('https://ghibliapi.herokuapp.com/films1')
//     .then(function (result) { console.log('Promise fulfilled.'); })
//     .catch(function (error) { console.log('There is some error.'); })

axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        let moviesList = '';
        response.data.forEach(movie => {
            moviesList += `${movie.title}, ${movie.release_date}\n`;
        });
        return fs.writeFile('promisesMovies.txt', moviesList);
    })
    .catch((error) => { console.log('There is some error.'); })
