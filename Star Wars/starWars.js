// var axios = require('axios');

// var main;
// axios.get('https://swapi.co/api/films/', {}).then(function(result) {
//   main = result.data.results[0]
//   console.log(main);
// });
//
// axios.get(main, {}).then(function(result) {
//   console.log(result);
// });

// axios.get('https://swapi.co/api/films/', function(result) {
//   console.log(result);
// })

var request = require('request');
// var main;
// request('https://swapi.co/api/films/', function(error, response, body) {
//   console.log('ERROR', error);
//   // console.log('RESPONSE', response);
//   console.log('BODY', JSON.parse(body));
// })

new Promise(function(resolve, reject) {
  request('https://swapi.co/api/films/1', function(error, response) {
      if (error) {
        reject(error);
      } else {
        var film = JSON.parse(response.body);
        resolve(film);
      }
  })
})
.then(function(film) {
  var starshipURL = film.starships[0];
  return new Promise(function(resolve, reject) {
    request(starshipURL, function(error, response) {
      if (error) {
        reject(error);
      } else {
        rating = JSON.parse(response.body).hyperdrive_rating;
        resolve(rating);
      }
    });
  });
})
.then(function(rating) {
  console.log(rating);
})
.catch(function(error) {
  console.log(error);
});

// var starshipURL;
// request('https://swapi.co/api/films/1', function(error, response, body) {
//   starshipURL = JSON.parse(body).starships[0]
//   request(starshipURL, function(error, response, body) {
//     rating = JSON.parse(body).hyperdrive_rating
//     console.log(rating);
//   });
// });

// var starshipURL;
// request('https://swapi.co/api/films/1', function(error, response, body) {
//   starshipURL = JSON.parse(body).results[0].starships[0];
// });
// request(starshipURL, function(error, response, body) {
//   console.log(JSON.parse(body));
// });


