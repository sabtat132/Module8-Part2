var apikey='iXIkkxPqgdD8VQ5oKtby2rf4i38K3KzG'
var urlbase='https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
var keyword= 'Value from the textbox that the user inputs in here'
var query = '?k='
var apikeyidentity = 'api-key='

//var url = urlbase + query + keyword + apikeyidentity + apikey;

var url = ('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=war&api-key=iXIkkxPqgdD8VQ5oKtby2rf4i38K3KzG')

function setup(){
  noCanvas();
  loadJSON(url,getData);
}

function getData (data) {
  var movies = data.results;

//loop to get all results from the movie
for(var i=0; i< movies.length; i++){
  createElement('h1', movies[i].display_title)
  createP(movies[i].publication_date);
  createP(movies[i].summary_short);
  }
}
